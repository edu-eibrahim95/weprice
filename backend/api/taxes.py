from flask_restful import Resource, reqparse
from main_api import main_api
from models import Tax, TaxSchema, User
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetTaxes(Resource):
    @jwt_required
    @can(action='view', thing='taxes')
    def get(self):
        taxes = Tax.query.filter_by(installation_id=get_user().installation_id).all()
        schema = TaxSchema(many=True)
        taxes_data = [] if len(taxes) == 0 else schema.dump(taxes).data
        add = able('add', 'taxes')
        edit = able('edit', 'taxes')
        delete = able('delete', 'taxes')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'taxes': taxes_data
        }


class GetTax(Resource):
    @jwt_required
    @can(action='view', thing='taxes')
    def get(self, tax_id):
        taxes = Tax.query.filter_by(id=tax_id).filter_by(installation_id=get_user().installation_id).all()
        schema = TaxSchema(many=True)
        taxes_data = [] if len(taxes) == 0 else schema.dump(taxes).data
        add = able('add', 'taxes')
        edit = able('edit', 'taxes')
        delete = able('delete', 'taxes')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'tax': taxes_data[0]
        }


class AddTax(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('initial_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('final_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('purchase_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('sale_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('account_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='taxes')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        tax = Tax(
            name=data['name'],
            initial_date=data['initial_date'],
            final_date=data['final_date'],
            purchase_pct=data['purchase_pct'],
            sale_pct=data['sale_pct'],
            account_id=data['account_id'],
            installation_id=user.installation_id,
        )
        try:
            save_to_db(tax)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteTax(Resource):
    @jwt_required
    @can('delete', 'taxes')
    def post(self, tax_id):
        user = get_user()
        if tax_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            taxes = Tax.query.filter(Tax.id.in_(data['ids'])).filter_by(installation_id=user.installation_id).all()

        else:
            taxes = Tax.query.filter_by(id=tax_id).filter_by(installation_id=user.installation_id).first()
            if not taxes:
                return {'status': 0}
        try:
            delete_from_db(taxes)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditTax(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('initial_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('final_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('purchase_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('sale_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('account_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='taxes')
    def post(self, tax_id):
        data = self.parser.parse_args()
        user = get_user()
        tax = Tax.query.filter_by(id=tax_id).filter_by(installation_id=user.installation_id).first()
        if not tax:
            return {'status': 0}
        columns = ['name', 'initial_date', 'final_date', 'purchase_pct', 'sale_pct', 'account_id']
        for i in columns:
            setattr(tax, '%s' % i, data[i])
        try:
            save_to_db(tax)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_taxes_routes():
    main_api.add_resource(GetTax, '/api/tax/<tax_id>')
    main_api.add_resource(GetTaxes, '/api/taxes')                         # View
    main_api.add_resource(AddTax, '/api/taxes/add')                       # Add
    main_api.add_resource(EditTax, '/api/taxes/edit/<tax_id>')         # Edit
    main_api.add_resource(DeleteTax, '/api/taxes/delete/<tax_id>')     # Delete

from flask_restful import Resource, reqparse
from main_api import main_api
from models import SocialCharge, SocialChargeSchema, User
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetSocialCharges(Resource):
    @jwt_required
    @can(action='view', thing='social_charges')
    def get(self):
        social_charges = SocialCharge.query.filter_by(installation_id=get_user().installation_id).all()
        schema = SocialChargeSchema(many=True)
        social_charges_data = [] if len(social_charges) == 0 else schema.dump(social_charges).data
        add = able('add', 'social_charges')
        edit = able('edit', 'social_charges')
        delete = able('delete', 'social_charges')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'social_charges': social_charges_data
        }


class GetSocialCharge(Resource):
    @jwt_required
    @can(action='view', thing='social_charges')
    def get(self, social_charge_id):
        social_charges = SocialCharge.query.filter_by(id=social_charge_id).filter_by(installation_id=get_user().installation_id).all()
        schema = SocialChargeSchema(many=True)
        social_charges_data = [] if len(social_charges) == 0 else schema.dump(social_charges).data
        add = able('add', 'social_charges')
        edit = able('edit', 'social_charges')
        delete = able('delete', 'social_charges')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'social_charge': social_charges_data[0]
        }


class AddSocialCharge(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('initial_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('final_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('charge_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('account_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='social_charges')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        social_charge= SocialCharge(
            description=data['description'],
            initial_date=data['initial_date'],
            final_date=data['final_date'],
            charge_pct=data['charge_pct'],
            account_id=data['account_id'],
            installation_id=user.installation_id,
        )
        try:
            save_to_db(social_charge)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteSocialCharge(Resource):
    @jwt_required
    @can('delete', 'social_charges')
    def post(self, social_charge_id):
        user = get_user()
        if social_charge_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            social_charges = SocialCharge.query.filter(SocialCharge.id.in_(data['ids'])).filter_by(installation_id=user.installation_id).all()

        else:
            social_charges = SocialCharge.query.filter_by(id=social_charge_id).filter_by(installation_id=user.installation_id).first()
            if not social_charges:
                return {'status': 0}
        try:
            delete_from_db(social_charges)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditSocialCharge(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('initial_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('final_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('charge_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('account_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='social_charges')
    def post(self, social_charge_id):
        data = self.parser.parse_args()
        user = get_user()
        social_charge= SocialCharge.query.filter_by(id=social_charge_id).filter_by(installation_id=user.installation_id).first()
        if not social_charge:
            return {'status': 0}
        columns = ['description', 'initial_date', 'final_date', 'charge_pct', 'account_id']
        for i in columns:
            setattr(social_charge, '%s' % i, data[i])
        try:
            save_to_db(social_charge)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_social_charges_routes():
    main_api.add_resource(GetSocialCharge, '/api/social_charge/<social_charge_id>')
    main_api.add_resource(GetSocialCharges, '/api/social_charges')                         # View
    main_api.add_resource(AddSocialCharge, '/api/social_charges/add')                       # Add
    main_api.add_resource(EditSocialCharge, '/api/social_charges/edit/<social_charge_id>')         # Edit
    main_api.add_resource(DeleteSocialCharge, '/api/social_charges/delete/<social_charge_id>')     # Delete

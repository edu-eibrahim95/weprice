from flask_restful import Resource, reqparse
from main_api import main_api
from models import Branch, BranchSchema, User, CostCenter, CostCenterSchema
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetCostCenters(Resource):
    @jwt_required
    @can(action='view', thing='cost_centers')
    def get(self):
        cost_centers = CostCenter.query.join(Branch, Branch.id == CostCenter.branch_id)\
            .filter(Branch.installation_id == get_user().installation_id).all()
        schema = CostCenterSchema(many=True)
        cost_centers_data = [] if len(cost_centers) == 0 else schema.dump(cost_centers).data
        add = able('add', 'cost_centers')
        edit = able('edit', 'cost_centers')
        delete = able('delete', 'cost_centers')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'cost_centers': cost_centers_data
        }


class GetCostCenter(Resource):
    @jwt_required
    @can(action='view', thing='cost_centers')
    def get(self, cost_center_id):
        cost_centers = CostCenter.query.filter_by(id=cost_center_id).join(Branch, Branch.id == CostCenter.branch_id)\
            .filter(Branch.installation_id == get_user().installation_id).all()
        schema = CostCenterSchema(many=True)
        branches_data = [] if len(cost_centers) == 0 else schema.dump(cost_centers).data
        add = able('add', 'cost_centers')
        edit = able('edit', 'cost_centers')
        delete = able('delete', 'cost_centers')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'cost_center': branches_data[0]
        }


class AddCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('area', help='This field cannot be blank', required=True)
        self.parser.add_argument('workhours_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('workdays_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('machines_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('sales_revenue', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='cost_centers')
    def post(self):
        data = self.parser.parse_args()
        cost_center = CostCenter(
            name=data['name'],
            type=data['type'],
            area=data['area'],
            workhours_qt=data['workhours_qt'],
            workdays_qt=data['workdays_qt'],
            machines_qt=data['machines_qt'],
            sales_revenue=data['sales_revenue'],
            branch_id=data['branch_id'],
        )
        try:
            save_to_db(cost_center)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('area', help='This field cannot be blank', required=True)
        self.parser.add_argument('workhours_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('workdays_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('machines_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('sales_revenue', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='cost_centers')
    def post(self, cost_center_id):
        data = self.parser.parse_args()
        cost_center = CostCenter.query.filter_by(id=cost_center_id).join(Branch, Branch.id == CostCenter.branch_id)\
            .filter(Branch.installation_id == get_user().installation_id).first()
        if not cost_center:
            return {'status': 0}
        for i in  ['name', 'type', 'area', 'workhours_qt', 'workdays_qt', 'machines_qt', 'sales_revenue', 'branch_id']:
            setattr(cost_center, '%s' % i, data[i])
        try:
            save_to_db(cost_center)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteCostCenter(Resource):
    @jwt_required
    @can('delete', 'cost_centers')
    def post(self, cost_center_id):
        user = get_user()
        if cost_center_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            cost_centers = CostCenter.query.filter(CostCenter.id.in_(data['ids'])).join(Branch, Branch.id == CostCenter.branch_id)\
            .filter(Branch.installation_id == get_user().installation_id).all()

        else:
            cost_centers = CostCenter.query.filter_by(id=cost_center_id).join(Branch, Branch.id == CostCenter.branch_id)\
            .filter(Branch.installation_id == get_user().installation_id).first()
            if not cost_centers:
                return {'status': 0}
        try:
            delete_from_db(cost_centers)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_cost_center_routes():
    main_api.add_resource(GetCostCenter, '/api/cost_center/<cost_center_id>')
    main_api.add_resource(GetCostCenters, '/api/cost_centers')                         # View
    main_api.add_resource(AddCostCenter, '/api/cost_centers/add')                       # Add
    main_api.add_resource(EditCostCenter, '/api/cost_centers/edit/<cost_center_id>')         # Edit
    main_api.add_resource(DeleteCostCenter, '/api/cost_centers/delete/<cost_center_id>')     # Delete

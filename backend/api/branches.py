from flask_restful import Resource, reqparse
from main_api import main_api
from models import Branch, BranchSchema, User
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetParentBranches(Resource):
    @jwt_required
    @can(action='view', thing='branches')
    def get(self):
        branches = Branch.query.filter_by(parent_id=0).all()
        schema = BranchSchema(many=True)
        branches_data = [] if len(branches) == 0 else schema.dump(branches).data
        return {
            'status': 1,
            'branches': branches_data
        }


class GetBranches(Resource):
    @jwt_required
    @can(action='view', thing='branches')
    def get(self):
        branches = Branch.query.filter_by(installation_id=get_user().installation_id).all()
        schema = BranchSchema(many=True)
        branches_data = [] if len(branches) == 0 else schema.dump(branches).data
        add = able('add', 'branches')
        edit = able('edit', 'branches')
        delete = able('delete', 'branches')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'branches': branches_data
        }


class GetBranch(Resource):
    @jwt_required
    @can(action='view', thing='branches')
    def get(self, branch_id):
        branches = Branch.query.filter_by(id=branch_id).filter_by(installation_id=get_user().installation_id).all()
        schema = BranchSchema(many=True)
        branches_data = [] if len(branches) == 0 else schema.dump(branches).data
        add = able('add', 'branches')
        edit = able('edit', 'branches')
        delete = able('delete', 'branches')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'branch': branches_data[0]
        }


class AddBranch(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('area', help='This field cannot be blank', required=True)
        self.parser.add_argument('months_avg_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('workhours_day_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('workdays_month_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('interest_month_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('raw_material_rate_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('months_stock_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('days_rec_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('parent_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='branches')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        branch = Branch(
            name=data['name'],
            type=data['type'],
            area=data['area'],
            months_avg_qt=data['months_avg_qt'],
            workhours_day_qt=data['workhours_day_qt'],
            workdays_month_qt=data['workdays_month_qt'],
            interest_month_pct=data['interest_month_pct'],
            raw_material_rate_pct=data['raw_material_rate_pct'],
            months_stock_qt=data['months_stock_qt'],
            days_rec_qt=data['days_rec_qt'],
            installation_id=user.installation_id,
            parent_id=data['parent_id']
        )
        try:
            save_to_db(branch)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteBranch(Resource):
    @jwt_required
    @can('delete', 'branches')
    def post(self, branch_id):
        user = get_user()
        if branch_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            branches = Branch.query.filter(Branch.id.in_(data['ids'])).filter_by(installation_id=user.installation_id).all()

        else:
            branches = Branch.query.filter_by(id=branch_id).filter_by(installation_id=user.installation_id).first()
            if not branches:
                return {'status': 0}
        try:
            delete_from_db(branches)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditBranch(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('area', help='This field cannot be blank', required=True)
        self.parser.add_argument('months_avg_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('workhours_day_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('workdays_month_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('interest_month_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('raw_material_rate_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('months_stock_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('days_rec_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('parent_id', help='This field cannot be blank', required=False)

    @jwt_required
    @can(action='edit', thing='branches')
    def post(self, branch_id):
        data = self.parser.parse_args()
        user = get_user()
        branch = Branch.query.filter_by(id=branch_id).filter_by(installation_id=user.installation_id).first()
        if not branch:
            return {'status': 0}
        columns = ['name', 'type', 'area', 'months_avg_qt', 'workhours_day_qt', 'workdays_month_qt', 'interest_month_pct',
                   'raw_material_rate_pct', 'months_stock_qt', 'days_rec_qt']
        for i in columns:
            setattr(branch, '%s' % i, data[i])
        parent_id = data['parent_id'] if data['parent_id'] is not None else 0
        setattr(branch, 'parent_id', parent_id)
        try:
            save_to_db(branch)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_branches_routes():
    main_api.add_resource(GetParentBranches, '/api/branches/parent')
    main_api.add_resource(GetBranch, '/api/branch/<branch_id>')
    main_api.add_resource(GetBranches, '/api/branches')                         # View
    main_api.add_resource(AddBranch, '/api/branches/add')                       # Add
    main_api.add_resource(EditBranch, '/api/branches/edit/<branch_id>')         # Edit
    main_api.add_resource(DeleteBranch, '/api/branches/delete/<branch_id>')     # Delete

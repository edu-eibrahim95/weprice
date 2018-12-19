from flask_restful import Resource, reqparse
from main_api import main_api
from models import Branch, BranchSchema
from db import save_to_db
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)


class GetParentBranches(Resource):
    @jwt_required
    def get(self):
        branches = Branch.query.filter_by(parent_id=0).all()
        schema = BranchSchema()
        branches_data = [] if len(branches) == 0 else schema.dump(branches).data
        return {
            'status': 1,
            'branches': branches_data
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
        self.parser.add_argument('installation_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('parent_id', help='This field cannot be blank', required=True)

    @jwt_required
    def post(self):
        data = self.parser.parse_args()
        print(data)
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
            installation_id=data['installation_id'],
            parent_id=data['parent_id']
        )
        try:
            save_to_db(branch)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_branches_routes():
    main_api.add_resource(GetParentBranches, '/api/branches/parent')
    main_api.add_resource(AddBranch, '/api/branches/add')
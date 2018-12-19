from flask_restful import Resource, reqparse
from main_api import main_api
from models import Installation, InstallationSchema
from db import save_to_db
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)


class AddInstallation(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('name', help='This field cannot be blank', required=True)

    @jwt_required
    def post(self):
        data = self.parser.parse_args()
        installation = Installation(name=data['name'], branch_qt=data['branch_qt'])
        try:
            save_to_db(installation)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditInstallation(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('name', help='This field cannot be blank', required=True)

    @jwt_required
    def post(self, installation_id):
        data = self.parser.parse_args()
        installation = Installation.query.filter_by(id=installation_id)
        if not installation:
            return {
                'status': 0,
                'message': "No Installation Found"
            }, 500
        installation.name = data['name']
        installation.branch_qt = data['branch_qt']
        try:
            save_to_db(installation)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class GetInstallations(Resource):
    @jwt_required
    def get(self):
        installations = Installation.query.all()
        schema = InstallationSchema(many=True)
        installations_data = [] if len(installations) == 0 else schema.dump(installations).data
        return {
            'status': 1,
            'installations': installations_data
        }


def register_installation_routes():
    main_api.add_resource(AddInstallation, '/api/installations/add')
    main_api.add_resource(EditInstallation, '/api/installations/edit/<installation_id>')
    main_api.add_resource(GetInstallations, '/api/installations')

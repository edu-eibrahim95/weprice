from flask_restful import Resource, reqparse
from backend.main_api import main_api
from backend.models import Parameter, ParameterSchema, User
from backend.db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from backend.api.utils import can, able, get_user


class GetParameters(Resource):
    @jwt_required
    @can(action='view', thing='parameters')
    def get(self):
        parameters = Parameter.query.filter_by(installation_id=get_user().installation_id).all()
        schema = ParameterSchema(many=True)
        parameters_data = [] if len(parameters) == 0 else schema.dump(parameters).data
        add = able('add', 'parameters')
        edit = able('edit', 'parameters')
        delete = able('delete', 'parameters')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'parameters': parameters_data
        }


class GetParameter(Resource):
    @jwt_required
    @can(action='view', thing='parameters')
    def get(self, parameter_id):
        parameters = Parameter.query.filter_by(id=parameter_id).filter_by(installation_id=get_user().installation_id).all()
        schema = ParameterSchema(many=True)
        parameters_data = [] if len(parameters) == 0 else schema.dump(parameters).data
        add = able('add', 'parameters')
        edit = able('edit', 'parameters')
        delete = able('delete', 'parameters')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'parameter': parameters_data[0]
        }


class AddParameter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('attribute', help='This field cannot be blank', required=True)
        self.parser.add_argument('default_value', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='parameters')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        parameter= Parameter(
            attribute=data['attribute'],
            description=data['description'],
            default_value=data['default_value'],
            installation_id=user.installation_id,
        )
        try:
            save_to_db(parameter)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteParameter(Resource):
    @jwt_required
    @can('delete', 'parameters')
    def post(self, parameter_id):
        user = get_user()
        if parameter_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            parameters = Parameter.query.filter(Parameter.id.in_(data['ids'])).filter_by(installation_id=user.installation_id).all()

        else:
            parameters = Parameter.query.filter_by(id=parameter_id).filter_by(installation_id=user.installation_id).first()
            if not parameters:
                return {'status': 0}
        try:
            delete_from_db(parameters)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditParameter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('attribute', help='This field cannot be blank', required=True)
        self.parser.add_argument('default_value', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='parameters')
    def post(self, parameter_id):
        data = self.parser.parse_args()
        user = get_user()
        parameter= Parameter.query.filter_by(id=parameter_id).filter_by(installation_id=user.installation_id).first()
        if not parameter:
            return {'status': 0}
        columns = ['description', 'attribute', 'default_value']
        for i in columns:
            setattr(parameter, '%s' % i, data[i])
        try:
            save_to_db(parameter)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_parameters_routes():
    main_api.add_resource(GetParameter, '/api/parameter/<parameter_id>')
    main_api.add_resource(GetParameters, '/api/parameters')                         # View
    main_api.add_resource(AddParameter, '/api/parameters/add')                       # Add
    main_api.add_resource(EditParameter, '/api/parameters/edit/<parameter_id>')         # Edit
    main_api.add_resource(DeleteParameter, '/api/parameters/delete/<parameter_id>')     # Delete

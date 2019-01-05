from flask_restful import Resource, reqparse
from main_api import main_api
from models import Local, LocalSchema, User
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetLocals(Resource):
    @jwt_required
    @can(action='view', thing='locals')
    def get(self):
        locals = Local.query.filter_by(installation_id=get_user().installation_id).all()
        schema = LocalSchema(many=True)
        locals_data = [] if len(locals) == 0 else schema.dump(locals).data
        add = able('add', 'locals')
        edit = able('edit', 'locals')
        delete = able('delete', 'locals')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'locals': locals_data
        }


class GetLocal(Resource):
    @jwt_required
    @can(action='view', thing='locals')
    def get(self, local_id):
        locals = Local.query.filter_by(id=local_id).filter_by(installation_id=get_user().installation_id).all()
        schema = LocalSchema(many=True)
        locals_data = [] if len(locals) == 0 else schema.dump(locals).data
        add = able('add', 'locals')
        edit = able('edit', 'locals')
        delete = able('delete', 'locals')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'local': locals_data[0]
        }


class AddLocal(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='locals')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        local = Local(
            description=data['description'],
            installation_id=user.installation_id,
        )
        try:
            save_to_db(local)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteLocal(Resource):
    @jwt_required
    @can('delete', 'locals')
    def post(self, local_id):
        user = get_user()
        if local_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            locals = Local.query.filter(Local.id.in_(data['ids'])).filter_by(installation_id=user.installation_id).all()

        else:
            locals = Local.query.filter_by(id=local_id).filter_by(installation_id=user.installation_id).first()
            if not locals:
                return {'status': 0}
        try:
            delete_from_db(locals)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditLocal(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='locals')
    def post(self, local_id):
        data = self.parser.parse_args()
        user = get_user()
        local = Local.query.filter_by(id=local_id).filter_by(installation_id=user.installation_id).first()
        if not local:
            return {'status': 0}
        columns = ['description']
        for i in columns:
            setattr(local, '%s' % i, data[i])
        try:
            save_to_db(local)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_locals_routes():
    main_api.add_resource(GetLocal, '/api/local/<local_id>')
    main_api.add_resource(GetLocals, '/api/locals')                         # View
    main_api.add_resource(AddLocal, '/api/locals/add')                       # Add
    main_api.add_resource(EditLocal, '/api/locals/edit/<local_id>')         # Edit
    main_api.add_resource(DeleteLocal, '/api/locals/delete/<local_id>')     # Delete

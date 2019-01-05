from flask_restful import Resource, reqparse
from main_api import main_api
from models import User, UserSchema, User
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetUsers(Resource):
    @jwt_required
    @can(action='view', thing='users')
    def get(self):
        users = User.query.filter_by(installation_id=get_user().installation_id)\
            .filter_by(admin_flag=0).all()
        schema = UserSchema(many=True, exclude=['password'])
        users_data = [] if len(users) == 0 else schema.dump(users).data
        add = able('add', 'users')
        edit = able('edit', 'users')
        delete = able('delete', 'users')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'users': users_data
        }


class GetUser(Resource):
    @jwt_required
    @can(action='view', thing='users')
    def get(self, user_id):
        users = User.query.filter_by(id=user_id).filter_by(installation_id=get_user().installation_id) \
            .filter_by(admin_flag=0).all()
        schema = UserSchema(many=True, exclude=['password'])
        if len(users) == 0:
            return {'status': 0}
        else:
            users_data = schema.dump(users).data
        add = able('add', 'users')
        edit = able('edit', 'users')
        delete = able('delete', 'users')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'user': users_data[0]
        }


class AddUser(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('password', help='This field cannot be blank', required=True)
        self.parser.add_argument('full_name', help='This field cannot be blank', required=True)
        self.parser.add_argument('email', help='This field cannot be blank', required=True)
        self.parser.add_argument('active_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('initial_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('final_date', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='users')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        user = User(
            name=data['name'],
            password=User.generate_hash(data['password']),
            full_name=data['full_name'],
            email=data['email'],
            active_flag=data['active_flag'],
            initial_date=data['initial_date'],
            final_date=data['final_date'],
            installation_id=user.installation_id,
        )
        try:
            save_to_db(user)
            return {'status': 1}
        except:
            return {'status': 0}, 500


# noinspection PyInterpreter
class DeleteUser(Resource):
    @jwt_required
    @can('delete', 'users')
    def post(self, user_id):
        user = get_user()
        if user_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            users = User.query.filter(User.id.in_(data['ids'])).filter_by(installation_id=user.installation_id) \
                .filter_by(admin_flag=0).all()

        else:
            users = User.query.filter_by(id=user_id).filter_by(installation_id=user.installation_id) \
                .filter_by(admin_flag=0).first()
            if not users:
                return {'status': 0}
        try:
            delete_from_db(users)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditUser(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('password', help='This field cannot be blank', required=False)
        self.parser.add_argument('full_name', help='This field cannot be blank', required=True)
        self.parser.add_argument('email', help='This field cannot be blank', required=True)
        self.parser.add_argument('active_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('initial_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('final_date', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='users')
    def post(self, user_id):
        data = self.parser.parse_args()
        user = get_user()
        user = User.query.filter_by(id=user_id).filter_by(installation_id=user.installation_id)\
            .filter_by(admin_flag=0).first()
        if not user:
            return {'status': 0}
        columns = ['name', 'full_name', 'email', 'active_flag', 'initial_date', 'final_date']
        for i in columns:
            setattr(user, '%s' % i, data[i])
        password = User.generate_hash(data['password']) if data['password'] is not None else None
        if password is not None:
            setattr(user, 'password', password)
        try:
            save_to_db(user)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_users_routes():
    main_api.add_resource(GetUser, '/api/user/<user_id>')
    main_api.add_resource(GetUsers, '/api/users')                         # View
    main_api.add_resource(AddUser, '/api/users/add')                       # Add
    main_api.add_resource(EditUser, '/api/users/edit/<user_id>')         # Edit
    main_api.add_resource(DeleteUser, '/api/users/delete/<user_id>')     # Delete

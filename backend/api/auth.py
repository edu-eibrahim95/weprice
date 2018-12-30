import datetime

from flask_restful import Resource, reqparse
from main_api import main_api
from models import User, UserSchema
from db import save_to_db
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)


def create_tokens(email):
    expires = datetime.timedelta(days=365)
    access_token = create_access_token(identity=email, expires_delta=expires)
    refresh_token = create_refresh_token(identity=email)
    return access_token, refresh_token


class Register(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('email', help='This field cannot be blank', required=True)
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('full_name', help='This field cannot be blank', required=True)
        self.parser.add_argument('password', help='This field cannot be blank', required=True)

    def post(self):
        data = self.parser.parse_args()
        user = User.query.filter_by(email=data['email']).first()
        if user:
            return {'message': 'User {} already exists'.format(data['email'])}
        new_user = User(
            email=data['email'],
            password=User.generate_hash(data['password']),
            name=data['name'],
            full_name=data['full_name']
        )
        try:
            save_to_db(new_user)
            access_token, refresh_token = create_tokens(email=data['email'])
            schema = UserSchema(only=['id', 'name', 'full_name', 'email'])
            user_data = schema.dump(new_user)
            user_data.data['token'] = access_token
            user_data.data['refresh_token'] = refresh_token
            return {
                'message': 1,
                'user': user_data.data
            }
        except:
            return {'message': 0}, 500


class Login(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('email', help='This field cannot be blank', required=True)
        self.parser.add_argument('password', help='This field cannot be blank', required=True)

    def post(self):
        data = self.parser.parse_args()
        current_user = User.query.filter_by(email=data['email']).first()
        if not current_user:
            return {'message': 'User {} doesn\'t exist'.format(data['email'])}

        if User.verify_hash(data['password'], current_user.password):
            access_token, refresh_token = create_tokens(email=data['email'])
            schema = UserSchema(only=['id', 'name', 'full_name', 'email'])
            user_data = schema.dump(current_user)
            user_data.data['token'] = access_token
            user_data.data['refresh_token'] = refresh_token
            return {
                'message': 1,
                'user': user_data.data,
            }
        else:
            return {'message': 0}


class SecretResource(Resource):
    @jwt_required
    def get(self):
        return {
            'answer': get_jwt_identity()
        }


def register_auth_routes():
    main_api.add_resource(Register, '/api/register')
    main_api.add_resource(Login, '/api/login')
    main_api.add_resource(SecretResource, '/api/user')

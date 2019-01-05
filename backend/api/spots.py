from flask_restful import Resource, reqparse
from main_api import main_api
from models import Spot, SpotSchema, User
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetSpots(Resource):
    @jwt_required
    @can(action='view', thing='spots')
    def get(self):
        spots = Spot.query.all()
        schema = SpotSchema(many=True)
        spots_data = [] if len(spots) == 0 else schema.dump(spots).data
        add = able('add', 'spots')
        edit = able('edit', 'spots')
        delete = able('delete', 'spots')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'spots': spots_data
        }


class GetSpot(Resource):
    @jwt_required
    @can(action='view', thing='spots')
    def get(self, spot_id):
        spots = Spot.query.filter_by(id=spot_id).all()
        schema = SpotSchema(many=True)
        spots_data = [] if len(spots) == 0 else schema.dump(spots).data
        add = able('add', 'spots')
        edit = able('edit', 'spots')
        delete = able('delete', 'spots')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'spot': spots_data[0]
        }


class AddSpot(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('ip_address', help='This field cannot be blank', required=True)
        self.parser.add_argument('nic_address', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='spots')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        spot = Spot(
            name=data['name'],
            ip_address=data['ip_address'],
            nic_address=data['nic_address'],
        )
        try:
            save_to_db(spot)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteSpot(Resource):
    @jwt_required
    @can('delete', 'spots')
    def post(self, spot_id):
        user = get_user()
        if spot_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            spots = Spot.query.filter(Spot.id.in_(data['ids'])).all()

        else:
            spots = Spot.query.filter_by(id=spot_id).first()
            if not spots:
                return {'status': 0}
        try:
            delete_from_db(spots)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditSpot(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('ip_address', help='This field cannot be blank', required=True)
        self.parser.add_argument('nic_address', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='spots')
    def post(self, spot_id):
        data = self.parser.parse_args()
        user = get_user()
        spot = Spot.query.filter_by(id=spot_id).first()
        if not spot:
            return {'status': 0}
        columns = ['name', 'ip_address', 'nic_address']
        for i in columns:
            setattr(spot, '%s' % i, data[i])
        try:
            save_to_db(spot)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_spots_routes():
    main_api.add_resource(GetSpot, '/api/spot/<spot_id>')
    main_api.add_resource(GetSpots, '/api/spots')                         # View
    main_api.add_resource(AddSpot, '/api/spots/add')                       # Add
    main_api.add_resource(EditSpot, '/api/spots/edit/<spot_id>')         # Edit
    main_api.add_resource(DeleteSpot, '/api/spots/delete/<spot_id>')     # Delete

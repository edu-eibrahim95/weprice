from flask_restful import Resource, reqparse
from main_api import main_api
from models import AssetType, AssetTypeSchema, User
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetAssetTypes(Resource):
    @jwt_required
    @can(action='view', thing='asset_types')
    def get(self):
        asset_types = AssetType.query.filter_by(installation_id=get_user().installation_id).all()
        schema = AssetTypeSchema(many=True)
        asset_types_data = [] if len(asset_types) == 0 else schema.dump(asset_types).data
        add = able('add', 'asset_types')
        edit = able('edit', 'asset_types')
        delete = able('delete', 'asset_types')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'asset_types': asset_types_data
        }


class GetAssetType(Resource):
    @jwt_required
    @can(action='view', thing='asset_types')
    def get(self, asset_type_id):
        asset_types = AssetType.query.filter_by(id=asset_type_id).filter_by(installation_id=get_user().installation_id).all()
        schema = AssetTypeSchema(many=True)
        asset_types_data = [] if len(asset_types) == 0 else schema.dump(asset_types).data
        add = able('add', 'asset_types')
        edit = able('edit', 'asset_types')
        delete = able('delete', 'asset_types')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'asset_type': asset_types_data[0]
        }


class AddAssetType(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('years_lifetime', help='This field cannot be blank', required=True)
        self.parser.add_argument('residual_lifetime', help='This field cannot be blank', required=True)
        self.parser.add_argument('interest_year_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('account_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='asset_types')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        asset_type = AssetType(
            description=data['description'],
            years_lifetime=data['years_lifetime'],
            residual_lifetime=data['residual_lifetime'],
            interest_year_pct=data['interest_year_pct'],
            account_id=data['account_id'],
            installation_id=user.installation_id,
        )
        try:
            save_to_db(asset_type)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteAssetType(Resource):
    @jwt_required
    @can('delete', 'asset_types')
    def post(self, asset_type_id):
        user = get_user()
        if asset_type_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            asset_types = AssetType.query.filter(AssetType.id.in_(data['ids'])).filter_by(installation_id=user.installation_id).all()

        else:
            asset_types = AssetType.query.filter_by(id=asset_type_id).filter_by(installation_id=user.installation_id).first()
            if not asset_types:
                return {'status': 0}
        try:
            delete_from_db(asset_types)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditAssetType(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('years_lifetime', help='This field cannot be blank', required=True)
        self.parser.add_argument('residual_lifetime', help='This field cannot be blank', required=True)
        self.parser.add_argument('interest_year_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('account_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='asset_types')
    def post(self, asset_type_id):
        data = self.parser.parse_args()
        user = get_user()
        asset_type = AssetType.query.filter_by(id=asset_type_id).filter_by(installation_id=user.installation_id).first()
        if not asset_type:
            return {'status': 0}
        columns = ['description', 'years_lifetime', 'residual_lifetime', 'interest_year_pct', 'account_id']
        for i in columns:
            setattr(asset_type, '%s' % i, data[i])
        try:
            save_to_db(asset_type)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_asset_types_routes():
    main_api.add_resource(GetAssetType, '/api/asset_type/<asset_type_id>')
    main_api.add_resource(GetAssetTypes, '/api/asset_types')                         # View
    main_api.add_resource(AddAssetType, '/api/asset_types/add')                       # Add
    main_api.add_resource(EditAssetType, '/api/asset_types/edit/<asset_type_id>')         # Edit
    main_api.add_resource(DeleteAssetType, '/api/asset_types/delete/<asset_type_id>')     # Delete

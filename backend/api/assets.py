from flask_restful import Resource, reqparse
from main_api import main_api
from models import Asset, AssetSchema, User, Branch, AssetCostCenterSchema, AssetCostCenter, CostCenter
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetAssets(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='assets')
    def get(self):
        data = self.parser.parse_args()
        assets = Asset.query.join(Branch, Branch.id == Asset.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id)\
            .filter(Branch.id == data['branch_id'])\
            .all()
        schema = AssetSchema(many=True)
        assets_data = [] if len(assets) == 0 else schema.dump(assets).data
        add = able('add', 'assets')
        edit = able('edit', 'assets')
        delete = able('delete', 'assets')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'assets': assets_data
        }


class GetAssetCostCenters(Resource):
    @jwt_required
    @can(action='view', thing='assets')
    def get(self, asset_id):
        assets_cost_centers = AssetCostCenter.query.filter_by(asset_id=asset_id).\
            join(Asset, Asset.id == AssetCostCenter.asset_id).\
            join(Branch, Branch.id == Asset.branch_id).\
            filter(Branch.installation_id == get_user().installation_id).all()
        for i in assets_cost_centers:
            i.name = i.costcenter_id
        schema = AssetCostCenterSchema(many=True)
        assets_data = [] if len(assets_cost_centers) == 0 else schema.dump(assets_cost_centers).data
        cost_centers = CostCenter.query.join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).all()
        cost_center_options = {"0": "Choose Cost Center"}
        for cost_center in cost_centers:
            cost_center_options["{}".format(cost_center.id)] = cost_center.name
        add = able('add', 'assets')
        edit = able('edit', 'assets')
        delete = able('delete', 'assets')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'assets_cost_centers': assets_data,
            'cost_center_options': cost_center_options
        }


class AddAssetCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('rating_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='assets')
    def post(self, asset_id):
        data = self.parser.parse_args()
        asset_cost_center = AssetCostCenter(
            asset_id=asset_id,
            costcenter_id=data['costcenter_id'],
            rating_pct=data['rating_pct'],
        )
        try:
            save_to_db(asset_cost_center)
            return {'status': 1, 'id': asset_cost_center.id}
        except:
            return {'status': 0}, 500


class EditAssetCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('rating_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='assets')
    def post(self, asset_id, asset_cost_center_id):
        data = self.parser.parse_args()
        asset_cost_center = AssetCostCenter.query.filter_by(id=asset_cost_center_id)\
            .join(Asset, Asset.id == AssetCostCenter.asset_id)\
            .filter(Asset.id == asset_id)\
            .join(Branch, Branch.id == Asset.branch_id)\
            .filter(Branch.installation_id == get_user().installation_id).first()
        if not asset_cost_center:
            return {'status': 0}
        asset_cost_center.asset_id = asset_id
        asset_cost_center.costcenter_id = data['costcenter_id']
        asset_cost_center.rating_pct = data['rating_pct']
        try:
            save_to_db(asset_cost_center)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteAssetCostCenter(Resource):
    @jwt_required
    @can('delete', 'assets')
    def post(self, asset_id, asset_cost_center_id):
        user = get_user()
        if asset_cost_center_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            assets_cost_centers = AssetCostCenter.query.filter(AssetCostCenter.id.in_(data['ids']))\
                .join(Asset, Asset.id == AssetCostCenter.asset_id)\
                .filter(Asset.id == asset_id)\
                .join(Branch, Branch.id == Asset.branch_id)\
                .filter(Branch.installation_id == user.installation_id).all()

        else:
            assets_cost_centers = AssetCostCenter.query.filter_by(id=asset_cost_center_id)\
                .join(Asset, Asset.id == AssetCostCenter.asset_id)\
                .filter(Asset.id == asset_id)\
                .join(Branch, Branch.id == Asset.branch_id)\
                .filter(Branch.installation_id == user.installation_id).first()

            if not assets_cost_centers:
                return {'status': 0}
        try:
            delete_from_db(assets_cost_centers)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class GetAsset(Resource):
    @jwt_required
    @can(action='view', thing='assets')
    def get(self, asset_id):
        assets = Asset.query.filter_by(id=asset_id).join(Branch, Branch.id == Asset.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).all()
        schema = AssetSchema(many=True)
        assets_data = [] if len(assets) == 0 else schema.dump(assets).data
        add = able('add', 'assets')
        edit = able('edit', 'assets')
        delete = able('delete', 'assets')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'asset': assets_data[0]
        }


class AddAsset(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('description_det', help='This field cannot be blank', required=True)
        self.parser.add_argument('inventory_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('cost_price_unit', help='This field cannot be blank', required=True)
        self.parser.add_argument('acquisition_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('start_depr_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('expiration_depr_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('depreciable_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('type_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('local_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='assets')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        asset = Asset(
            description=data['description'],
            description_det=data['description_det'],
            inventory_qt=data['inventory_qt'],
            cost_price_unit=data['cost_price_unit'],
            acquisition_date=data['acquisition_date'],
            start_depr_date=data['start_depr_date'],
            expiration_depr_date=data['expiration_depr_date'],
            depreciable_flag=data['depreciable_flag'],
            type_id=data['type_id'],
            local_id=data['local_id'],
            branch_id=data['branch_id'],
        )
        try:
            save_to_db(asset)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteAsset(Resource):
    @jwt_required
    @can('delete', 'assets')
    def post(self, asset_id):
        user = get_user()
        if asset_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            assets = Asset.query.filter(Asset.id.in_(data['ids'])).join(Branch, Branch.id == Asset.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).all()

        else:
            assets = Asset.query.filter_by(id=asset_id).join(Branch, Branch.id == Asset.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).first()
            if not assets:
                return {'status': 0}
        try:
            delete_from_db(assets)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditAsset(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('description_det', help='This field cannot be blank', required=True)
        self.parser.add_argument('inventory_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('cost_price_unit', help='This field cannot be blank', required=True)
        self.parser.add_argument('acquisition_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('start_depr_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('expiration_depr_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('depreciable_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('type_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('local_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='assets')
    def post(self, asset_id):
        data = self.parser.parse_args()
        user = get_user()
        asset= Asset.query.filter_by(id=asset_id).join(Branch, Branch.id == Asset.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).first()
        if not asset:
            return {'status': 0}
        columns = ['description', 'description_det', 'inventory_qt', 'cost_price_unit', 'acquisition_date', 'start_depr_date',
                   'expiration_depr_date', 'depreciable_flag', 'branch_id', 'local_id', 'type_id']
        for i in columns:
            setattr(asset, '%s' % i, data[i])
        try:
            save_to_db(asset)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_assets_routes():
    main_api.add_resource(GetAsset, '/api/asset/<asset_id>')
    main_api.add_resource(GetAssets, '/api/assets')                         # View
    main_api.add_resource(GetAssetCostCenters, '/api/assets/cost_centers/<asset_id>')                         # View
    main_api.add_resource(AddAssetCostCenter, '/api/assets/cost_centers/<asset_id>/add')                         # View
    main_api.add_resource(EditAssetCostCenter, '/api/assets/cost_centers/<asset_id>/edit/<asset_cost_center_id>')
    main_api.add_resource(DeleteAssetCostCenter, '/api/assets/cost_centers/<asset_id>/delete/<asset_cost_center_id>')
    main_api.add_resource(AddAsset, '/api/assets/add')                       # Add
    main_api.add_resource(EditAsset, '/api/assets/edit/<asset_id>')         # Edit
    main_api.add_resource(DeleteAsset, '/api/assets/delete/<asset_id>')     # Delete

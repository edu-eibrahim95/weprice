from api.auth import register_auth_routes
from api.installations import register_installation_routes
from api.branches import register_branches_routes
from api.cost_centers import register_cost_center_routes
from api.accounts import register_accounts_routes
from api.taxes import register_taxes_routes
from api.social_charges import register_social_charges_routes
from api.parameters import register_parameters_routes
from api.products import register_products_routes
from api.employees import register_employees_routes
from api.assets import register_assets_routes
from api.users import register_users_routes
from api.product_classifs import register_productclassifs_routes
from api.asset_types import register_asset_types_routes
from api.locals import register_locals_routes
from api.spots import register_spots_routes


class BluePrint:
    def __init__(self, name, prefix):
        self.name = name
        self.prefix = prefix


def register_api_routes():
    register_auth_routes()
    register_installation_routes()
    register_branches_routes()
    register_cost_center_routes()
    register_accounts_routes()
    register_taxes_routes()
    register_social_charges_routes()
    register_parameters_routes()
    register_products_routes()
    register_employees_routes()
    register_assets_routes()
    register_users_routes()
    register_productclassifs_routes()
    register_asset_types_routes()
    register_locals_routes()
    register_spots_routes()
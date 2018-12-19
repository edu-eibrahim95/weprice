from api.auth import register_auth_routes
from api.installations import register_installation_routes
from api.branches import register_branches_routes


class BluePrint:
    def __init__(self, name, prefix):
        self.name = name
        self.prefix = prefix


def register_api_routes():
    register_auth_routes()
    register_installation_routes()
    register_branches_routes()

from flask_restful import Resource, reqparse
from backend.main_api import main_api
from backend.models import Account, AccountSchema, User, AccountCostCenter, AccountCostCenterSchema, CostCenter, Branch
from backend.db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from backend.api.utils import can, able, get_user


class GetAccounts(Resource):
    @jwt_required
    @can(action='view', thing='accounts')
    def get(self):
        accounts = Account.query.filter_by(installation_id=get_user().installation_id).all()
        schema = AccountSchema(many=True)
        accounts_data = [] if len(accounts) == 0 else schema.dump(accounts).data
        add = able('add', 'accounts')
        edit = able('edit', 'accounts')
        delete = able('delete', 'accounts')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'accounts': accounts_data
        }


class GetAccountCostCenters(Resource):
    @jwt_required
    @can(action='view', thing='accounts')
    def get(self, account_id):
        accounts_cost_centers = AccountCostCenter.query.filter_by(account_id=account_id).\
            join(Account, Account.id == AccountCostCenter.account_id).\
            filter(Account.installation_id == get_user().installation_id).all()
        for i in accounts_cost_centers:
            i.name = i.costcenter_id
        schema = AccountCostCenterSchema(many=True)
        accounts_data = [] if len(accounts_cost_centers) == 0 else schema.dump(accounts_cost_centers).data
        cost_centers = CostCenter.query.join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).all()
        cost_center_options = {"0": "Choose Cost Center"}
        for cost_center in cost_centers:
            cost_center_options["{}".format(cost_center.id)] = cost_center.name
        add = able('add', 'accounts')
        edit = able('edit', 'accounts')
        delete = able('delete', 'accounts')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'accounts_cost_centers': accounts_data,
            'cost_center_options': cost_center_options
        }


class AddAccountCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('rating_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='accounts')
    def post(self, account_id):
        data = self.parser.parse_args()
        account_cost_center = AccountCostCenter(
            account_id=account_id,
            costcenter_id=data['costcenter_id'],
            rating_pct=data['rating_pct'],
        )
        try:
            save_to_db(account_cost_center)
            return {'status': 1, 'id': account_cost_center.id}
        except:
            return {'status': 0}, 500


class EditAccountCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('rating_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='accounts')
    def post(self, account_id, account_cost_center_id):
        data = self.parser.parse_args()
        account_cost_center = AccountCostCenter.query.filter_by(id=account_cost_center_id)\
            .join(Account, Account.id == AccountCostCenter.account_id)\
            .filter(Account.id == account_id)\
            .filter(Account.installation_id == get_user().installation_id).first()
        if not account_cost_center:
            return {'status': 0}
        account_cost_center.account_id = account_id
        account_cost_center.costcenter_id = data['costcenter_id']
        account_cost_center.rating_pct = data['rating_pct']
        try:
            save_to_db(account_cost_center)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class GetAccount(Resource):
    @jwt_required
    @can(action='view', thing='accounts')
    def get(self, account_id):
        accounts = Account.query.filter_by(id=account_id).filter_by(installation_id=get_user().installation_id).all()
        schema = AccountSchema(many=True)
        accounts_data = [] if len(accounts) == 0 else schema.dump(accounts).data
        add = able('add', 'accounts')
        edit = able('edit', 'accounts')
        delete = able('delete', 'accounts')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'account': accounts_data[0]
        }


class AddAccount(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('code', help='This field cannot be blank', required=True)
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('nat', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_type', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_abs_type', help='This field cannot be blank', required=True)
        self.parser.add_argument('bdgentry_value', help='This field cannot be blank', required=True)
        self.parser.add_argument('bdgentry_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_limit_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_var_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('months_qt_avg', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_ded_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_recov_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('earning_distrib_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('revenue_flag', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='accounts')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        account = Account(
            code=data['code'],
            description=data['description'],
            type=data['type'],
            nat=data['nat'],
            expense_type=data['expense_type'],
            expense_abs_type=data['expense_abs_type'],
            bdgentry_value=data['bdgentry_value'],
            bdgentry_flag=data['bdgentry_flag'],
            expense_limit_pct=data['expense_limit_pct'],
            expense_var_pct=data['expense_var_pct'],
            months_qt_avg=data['months_qt_avg'],
            expense_ded_pct=data['months_qt_avg'],
            expense_recov_pct=data['expense_recov_pct'],
            earning_distrib_flag=data['earning_distrib_flag'],
            revenue_flag=data['revenue_flag'],
            installation_id=user.installation_id,
        )
        try:
            save_to_db(account)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteAccount(Resource):
    @jwt_required
    @can('delete', 'accounts')
    def post(self, account_id):
        user = get_user()
        if account_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            accounts = Account.query.filter(Account.id.in_(data['ids'])).filter_by(installation_id=user.installation_id).all()

        else:
            accounts = Account.query.filter_by(id=account_id).filter_by(installation_id=user.installation_id).first()
            if not accounts:
                return {'status': 0}
        try:
            delete_from_db(accounts)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteAccountCostCenter(Resource):
    @jwt_required
    @can('delete', 'accounts')
    def post(self, account_id, account_cost_center_id):
        user = get_user()
        if account_cost_center_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            accounts_cost_centers = AccountCostCenter.query.filter(AccountCostCenter.id.in_(data['ids']))\
                .join(Account, Account.id == AccountCostCenter.account_id)\
                .filter(Account.id == account_id)\
                .filter(Account.installation_id == user.installation_id).all()

        else:
            accounts_cost_centers = AccountCostCenter.query.filter_by(id=account_cost_center_id)\
                .join(Account, Account.id == AccountCostCenter.account_id)\
                .filter(Account.id == account_id)\
                .filter(Account.installation_id == user.installation_id).first()

            if not accounts_cost_centers:
                return {'status': 0}
        try:
            delete_from_db(accounts_cost_centers)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditAccount(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('code', help='This field cannot be blank', required=True)
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('nat', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_type', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_abs_type', help='This field cannot be blank', required=True)
        self.parser.add_argument('bdgentry_value', help='This field cannot be blank', required=True)
        self.parser.add_argument('bdgentry_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_limit_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_var_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('months_qt_avg', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_ded_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('expense_recov_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('earning_distrib_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('revenue_flag', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='accounts')
    def post(self, account_id):
        data = self.parser.parse_args()
        user = get_user()
        account = Account.query.filter_by(id=account_id).filter_by(installation_id=user.installation_id).first()
        if not account:
            return {'status': 0}
        columns =  ['code', 'description', 'type', 'nat', 'expense_type', 'expense_abs_type', 'bdgentry_value',
                    'bdgentry_flag', 'expense_limit_pct', 'expense_var_pct', 'months_qt_avg', 'expense_ded_pct',
                    'expense_recov_pct', 'earning_distrib_flag', 'revenue_flag']
        for i in columns:
            setattr(account, '%s' % i, data[i])
        try:
            save_to_db(account)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_accounts_routes():
    main_api.add_resource(GetAccount, '/api/account/<account_id>')
    main_api.add_resource(GetAccounts, '/api/accounts')                         # View
    main_api.add_resource(GetAccountCostCenters, '/api/accounts/cost_centers/<account_id>')                     # View
    main_api.add_resource(AddAccountCostCenter, '/api/accounts/cost_centers/<account_id>/add')                     # View
    main_api.add_resource(EditAccountCostCenter, '/api/accounts/cost_centers/<account_id>/edit/<account_cost_center_id>')                     # View
    main_api.add_resource(DeleteAccountCostCenter, '/api/accounts/cost_centers/<account_id>/delete/<account_cost_center_id>')                     # View
    main_api.add_resource(AddAccount, '/api/accounts/add')                       # Add
    main_api.add_resource(EditAccount, '/api/accounts/edit/<account_id>')         # Edit
    main_api.add_resource(DeleteAccount, '/api/accounts/delete/<account_id>')     # Delete

from flask_restful import Resource, reqparse
from backend.main_api import main_api
from backend.models import EntryAccount, EntryAccountSchema, User, Branch, CostCenter
from backend.db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from backend.api.utils import can, able, get_user
# from sqlalchemy import _like


class GetEntryAccounts(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=False)
        self.parser.add_argument('account_id', help='This field cannot be blank', required=False)
        self.parser.add_argument('historic', help='This field cannot be blank', required=False)
        self.parser.add_argument('reference_date_start', help='This field cannot be blank', required=False)
        self.parser.add_argument('reference_date_end', help='This field cannot be blank', required=False)
        self.parser.add_argument('due_date_start', help='This field cannot be blank', required=False)
        self.parser.add_argument('due_date_end', help='This field cannot be blank', required=False)

    @jwt_required
    @can(action='view', thing='entry_accounts')
    def get(self):
        data = self.parser.parse_args()
        entry_accounts = EntryAccount.query.join(Branch, Branch.id == EntryAccount.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id)\
            .filter(Branch.id == data['branch_id'])
        if data['type'] is not None and data['type'] != str(-1):
            entry_accounts = entry_accounts.filter(EntryAccount.type == data['type'])
        if data['account_id'] is not None and int(data['account_id']) != 0:
            entry_accounts = entry_accounts.filter(EntryAccount.account_id == data['account_id'])
        if data['historic'] is not None and data['historic'] != '':
            entry_accounts = entry_accounts.filter(EntryAccount.historic.like('%'+data['historic']+'%'))
        if data['reference_date_start'] is not None and data['reference_date_start'] != '':
            entry_accounts = entry_accounts.filter(EntryAccount.reference_date >= data['reference_date_start'])
        if data['reference_date_end'] is not None and data['reference_date_end'] != '':
            entry_accounts = entry_accounts.filter(EntryAccount.reference_date <= data['reference_date_end'])
        if data['due_date_start'] is not None and data['due_date_start'] != '':
            entry_accounts = entry_accounts.filter(EntryAccount.due_date >= data['due_date_start'])
        if data['due_date_end'] is not None and data['due_date_end'] != '':
            entry_accounts = entry_accounts.filter(EntryAccount.due_date <= data['due_date_end'])
        entry_accounts = entry_accounts.all()
        schema = EntryAccountSchema(many=True)
        entry_accounts_data = [] if len(entry_accounts) == 0 else schema.dump(entry_accounts).data
        add = able('add', 'entry_accounts')
        edit = able('edit', 'entry_accounts')
        delete = able('delete', 'entry_accounts')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'entry_accounts': entry_accounts_data
        }


class GetEntryAccount(Resource):
    @jwt_required
    @can(action='view', thing='entry_accounts')
    def get(self, entry_account_id):
        entry_accounts = EntryAccount.query.filter_by(id=entry_account_id).join(Branch, Branch.id == EntryAccount.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).all()
        schema = EntryAccountSchema(many=True)
        entry_accounts_data = [] if len(entry_accounts) == 0 else schema.dump(entry_accounts).data
        add = able('add', 'entry_accounts')
        edit = able('edit', 'entry_accounts')
        delete = able('delete', 'entry_accounts')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'entry_account': entry_accounts_data[0]
        }


class AddEntryAccount(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('reference_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('payment_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('due_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('historic', help='This field cannot be blank', required=True)
        self.parser.add_argument('entry_value', help='This field cannot be blank', required=True)
        self.parser.add_argument('account_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('cost_center_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='entry_accounts')
    def post(self):
        data = self.parser.parse_args()
        entry_account = EntryAccount(
            type=data['type'],
            reference_date=data['reference_date'],
            payment_date=data['payment_date'],
            due_date=data['due_date'],
            historic=data['historic'],
            entry_value=data['entry_value'],
            account_id=data['account_id'],
            cost_center_id=data['cost_center_id'],
            branch_id=data['branch_id'],
        )
        save_to_db(entry_account)
        try:
            save_to_db(entry_account)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteEntryAccount(Resource):
    @jwt_required
    @can('delete', 'entry_accounts')
    def post(self, entry_account_id):
        if entry_account_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            entry_accounts = EntryAccount.query.filter(EntryAccount.id.in_(data['ids'])).join(Branch, Branch.id == EntryAccount.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).all()

        else:
            entry_accounts = EntryAccount.query.filter_by(id=entry_account_id).join(Branch, Branch.id == EntryAccount.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).first()
            if not entry_accounts:
                return {'status': 0}
        try:
            delete_from_db(entry_accounts)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditEntryAccount(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('reference_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('payment_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('due_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('historic', help='This field cannot be blank', required=True)
        self.parser.add_argument('entry_value', help='This field cannot be blank', required=True)
        self.parser.add_argument('account_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('cost_center_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='entry_accounts')
    def post(self, entry_account_id):
        data = self.parser.parse_args()
        entry_account= EntryAccount.query.filter_by(id=entry_account_id).join(Branch, Branch.id == EntryAccount.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).first()
        if not entry_account:
            return {'status': 0}
        columns = ['type', 'reference_date', 'payment_date', 'due_date', 'historic', 'entry_value',
                   'account_id', 'cost_center_id']
        for i in columns:
            setattr(entry_account, '%s' % i, data[i])
        try:
            save_to_db(entry_account)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_entry_accounts_routes():
    main_api.add_resource(GetEntryAccount, '/api/entry_account/<entry_account_id>')
    main_api.add_resource(GetEntryAccounts, '/api/entry_accounts')                         # View
    main_api.add_resource(AddEntryAccount, '/api/entry_accounts/add')                       # Add
    main_api.add_resource(EditEntryAccount, '/api/entry_accounts/edit/<entry_account_id>')         # Edit
    main_api.add_resource(DeleteEntryAccount, '/api/entry_accounts/delete/<entry_account_id>')     # Delete

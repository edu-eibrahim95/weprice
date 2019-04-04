from flask_restful import Resource, reqparse
from backend.main_api import main_api
from backend.models import CostMap, CostMapSchema, User, Branch, CostCenter, CostCenterRatio, Asset, AssetCostCenter, \
    Employee \
    , EmployeeCostCenter, Account, AccountCostCenter, EntryAccount, Accountacum, Costmapaccount, EmployeeCostCenter, \
    AssetType, AccountSchema, AccountCostCenterSchema, EmployeeSchema, EmployeeCostCenterSchema, CostCenterSchema, \
    AssetSchema, AssetTypeSchema, EntryAccountSchema, AssetCostCenterSchema, AccountacumSchema, Costmapcostcenter, \
    CostmapaccountSchema, CostCenterRatioSchema, CostmapcostcenterAbs
from backend.db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from backend.api.utils import can, able, get_user, Struct, iterate, oneObject

from backend.models.SocialCharge import SocialCharge, SocialChargeSchema


def checkApportionment(branch_id):
    errors = []
    support_cost_centers = CostCenter.query.filter(CostCenter.branch_id == branch_id).filter(CostCenter.type == 1).all()
    for cost_center in support_cost_centers:
        porions = CostCenterRatio.query.filter(CostCenterRatio.costcenter_id == cost_center.id).all()
        summ = sum([i.rating_pct for i in porions])
        if summ != 100:
            errors.append("The cost center '{}' is not prorated in 100%".format(cost_center.name))
    assets = Asset.query.join(Branch, Branch.id == Asset.branch_id) \
        .filter(Branch.installation_id == get_user().installation_id) \
        .filter(Branch.id == branch_id).all()
    for asset in assets:
        assets_cost_centers = AssetCostCenter.query.filter_by(asset_id=asset.id). \
            join(Asset, Asset.id == AssetCostCenter.asset_id). \
            join(Branch, Branch.id == Asset.branch_id). \
            filter(Branch.installation_id == get_user().installation_id). \
            filter(Branch.id == branch_id).all()
        summ = sum([i.rating_pct for i in assets_cost_centers])
        if summ != 100:
            errors.append("The Fixed Asset '{}' is not prorated in 100%".format(asset.description))
    employees = Employee.query.join(Branch, Branch.id == Employee.branch_id) \
        .filter(Branch.installation_id == get_user().installation_id) \
        .filter(Branch.id == branch_id).all()
    for employee in employees:
        employee_cost_centers = EmployeeCostCenter.query.join(Employee, Employee.id == EmployeeCostCenter.employee_id) \
            .join(Branch, Branch.id == Employee.branch_id) \
            .filter(employee.id == Employee.id) \
            .filter(Branch.installation_id == get_user().installation_id) \
            .filter(Branch.id == branch_id).all()
        summ = sum([i.rating_pct for i in employee_cost_centers])
        if summ != 100:
            errors.append("The Employee '{}' is not prorated in 100%".format(employee.name))
    accounts = Account.query.filter_by(installation_id=get_user().installation_id).all()
    for account in accounts:
        accounts_cost_centers = AccountCostCenter.query.filter_by(account_id=account.id). \
            join(Account, Account.id == AccountCostCenter.account_id). \
            filter(Account.installation_id == get_user().installation_id).all()
        summ = sum([i.rating_pct for i in accounts_cost_centers])
        if summ != 100:
            errors.append("The Account '{}' is not prorated in 100%".format(account.code))
    entry_accounts = EntryAccount.query.join(Branch, Branch.id == EntryAccount.branch_id) \
        .join(Account, Account.id == EntryAccount.account_id).filter(Account.expense_abs_type == 8) \
        .filter(Branch.installation_id == get_user().installation_id) \
        .filter(Branch.id == branch_id).all()
    for entry_account in entry_accounts:
        entry_account_cost_center = CostCenter.query.filter(CostCenter.id == entry_account.cost_center_id).first()
        entry_account_account = Account.query.filter(Account.id == entry_account.account_id).first()
        if not entry_account_cost_center:
            errors.append("The Entry '{}' on Account '{}' on date '{}', the cost center is missing" \
                          .format(entry_account.historic, entry_account_account.code, entry_account.reference_date))
    return errors


def calculateCostMap(cost_map_id, branch_id, year, month):
    Costmapaccount.query.filter(Costmapaccount.costmap_id == cost_map_id).delete()
    accounts = Account.query.filter_by(installation_id=get_user().installation_id).all()
    for account in iterate(accounts, AccountSchema):
        account_acum = Accountacum.query.filter_by(account_id=account.id).filter_by(branch_id=branch_id).first()
        if not account_acum:
            continue
        account_acum = oneObject(account_acum, AccountacumSchema)
        if account.expense_abs_type == 0 or account.expense_abs_type == 7:
            costmap_account = Costmapaccount(costmap_id=cost_map_id, account_id=account.id, cost_center_id=0,
                                             cost_value=account_acum.acum_value, cost_pct=0, cost_center_type=0,
                                             expense_abs_type=account.expense_abs_type,
                                             bdg_entry_flag=account.bdgentry_flag, real_cost_value=0)
            save_to_db(costmap_account)
        elif account.expense_abs_type == 1:
            accounts_cost_centers = AccountCostCenter.query.filter_by(account_id=account.id). \
                join(Account, Account.id == AccountCostCenter.account_id). \
                filter(Account.installation_id == get_user().installation_id).all()
            for accounts_cost_center in iterate(accounts_cost_centers, AccountCostCenterSchema):
                cost_center = CostCenter.query.filter_by(id=accounts_cost_center.costcenter_id).first()
                if not cost_center:
                    continue
                cost_center = oneObject(cost_center, CostCenterSchema)
                cost_center_type = cost_center.type if cost_center else None
                costmap_account = Costmapaccount(costmap_id=cost_map_id, account_id=account.id,
                                                 cost_center_id=accounts_cost_center.costcenter_id,
                                                 cost_value=account_acum.acum_value * accounts_cost_center.rating_pct / 100,
                                                 cost_pct=accounts_cost_center.rating_pct,
                                                 cost_center_type=cost_center_type,
                                                 expense_abs_type=account.expense_abs_type,
                                                 bdg_entry_flag=account.bdgentry_flag,
                                                 real_cost_value=account.months_qt_avg)
                save_to_db(costmap_account)
        elif account.expense_abs_type == 2:
            employees = Employee.query.join(Branch, Branch.id == Employee.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).filter(
                (Employee.type == 0) | (Employee.type == 2)) \
                .filter(Branch.id == branch_id).all()
            for employee in iterate(employees, EmployeeSchema):
                employee_cost_centers = EmployeeCostCenter.query.join(Employee,
                                                                      Employee.id == EmployeeCostCenter.employee_id) \
                    .join(Branch, Branch.id == Employee.branch_id) \
                    .filter(employee.id == Employee.id) \
                    .filter(Branch.installation_id == get_user().installation_id).filter(Branch.id == branch_id).all()

                for employee_cost_center in iterate(employee_cost_centers, EmployeeCostCenterSchema):
                    cost_center = CostCenter.query.filter_by(id=employee_cost_center.costcenter_id).first()
                    if not cost_center:
                        continue
                    cost_center = oneObject(cost_center, CostCenterSchema)
                    costmap_account = Costmapaccount(costmap_id=cost_map_id,
                                                     account_id=account.id,
                                                     cost_center_id=employee_cost_center.costcenter_id,
                                                     cost_value=employee.salary + employee.extra_salary,
                                                     cost_pct=employee_cost_center.rating_pct,
                                                     cost_center_type=cost_center.type,
                                                     expense_abs_type=account.expense_abs_type,
                                                     bdg_entry_flag=account.bdgentry_flag,
                                                     real_cost_value=account.months_qt_avg,
                                                     )
                    save_to_db(costmap_account)
        elif account.expense_abs_type == 3:
            cost_centers = CostCenter.query.join(Branch, Branch.id == CostCenter.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).filter(Branch.id == branch_id) \
                .join(AccountCostCenter, AccountCostCenter.costcenter_id == CostCenter.id) \
                .filter(AccountCostCenter.account_id == account.id).all()
            cost_centers_num = len(cost_centers)
            for cost_center in iterate(cost_centers, CostCenterSchema):
                cost_center_employees = Employee.query.join(Branch, Branch.id == Employee.branch_id) \
                    .filter(Branch.installation_id == get_user().installation_id).filter(Branch.id == branch_id) \
                    .join(EmployeeCostCenter, EmployeeCostCenter.employee_id == Employee.id) \
                    .filter(EmployeeCostCenter.costcenter_id == cost_center.id).all()
                employee_num = len(cost_center_employees)
                costmap_account = Costmapaccount(costmap_id=cost_map_id, account_id=account.id,
                                                 cost_center_id=cost_center.id,
                                                 cost_value=100 * account_acum.acum_value / employee_num if employee_num != 0 else 0,
                                                 cost_pct=0, cost_center_type=0,
                                                 expense_abs_type=account.expense_abs_type,
                                                 bdg_entry_flag=account.bdgentry_flag, real_cost_value=0)
                save_to_db(costmap_account)
        elif account.expense_abs_type == 4:
            employees = Employee.query.join(Branch, Branch.id == Employee.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).filter(Employee.type == 1) \
                .filter(Branch.id == branch_id).all()
            for employee in iterate(employees, EmployeeSchema):
                employee_cost_centers = EmployeeCostCenter.query.join(Employee,
                                                                      Employee.id == EmployeeCostCenter.employee_id) \
                    .join(Branch, Branch.id == Employee.branch_id) \
                    .filter(employee.id == Employee.id) \
                    .filter(Branch.installation_id == get_user().installation_id).filter(Branch.id == branch_id).all()

                for employee_cost_center in iterate(employee_cost_centers, EmployeeCostCenterSchema):
                    cost_center = CostCenter.query.filter_by(id=employee_cost_center.costcenter_id).first()
                    if not cost_center:
                        continue
                    cost_center = oneObject(cost_center, CostCenterSchema)
                    costmap_account = Costmapaccount(costmap_id=cost_map_id,
                                                     account_id=account.id,
                                                     cost_center_id=employee_cost_center.costcenter_id,
                                                     cost_value=employee.salary * employee.salary,
                                                     cost_pct=employee_cost_center.rating_pct,
                                                     cost_center_type=cost_center.type,
                                                     expense_abs_type=account.expense_abs_type,
                                                     bdg_entry_flag=account.bdgentry_flag,
                                                     real_cost_value=account.months_qt_avg,
                                                     )
                    save_to_db(costmap_account)

        elif account.expense_abs_type == 5:
            social_charges = SocialCharge.query.filter(SocialCharge.account_id == account.id).all()
            for social_charge in iterate(social_charges, SocialChargeSchema):
                # here
                cost_centers = CostCenter.query.join(Branch, Branch.id == CostCenter.branch_id) \
                    .filter(Branch.installation_id == get_user().installation_id) \
                    .join(CostCenter, CostCenter.id == AccountCostCenter.costcenter_id).filter(
                    AccountCostCenter.account_id == account.id) \
                    .order_by(CostCenter.type.asc()).order_by(CostCenter.abs_order.asc()) \
                    .filter(Branch.id == branch_id).all()
                cost_centers_num = len(cost_centers)
                for cost_center in iterate(cost_centers, CostCenterSchema):
                    cost_center_employees = Employee.query.join(Branch, Branch.id == Employee.branch_id) \
                        .filter(Branch.installation_id == get_user().installation_id).filter(Branch.id == branch_id) \
                        .join(EmployeeCostCenter.employee_id == Employee.id) \
                        .filter(EmployeeCostCenter.costcenter_id == cost_center.id).all()
                    cost_value = 0
                    for employee in iterate(cost_center_employees, EmployeeSchema):
                        employee_cost_center = EmployeeCostCenter.query.join(Employee,
                                                                             Employee.id == EmployeeCostCenter.employee_id) \
                            .filter(Employee.id == employee.id) \
                            .join(Branch, Branch.id == Employee.branch_id) \
                            .filter(EmployeeCostCenter.costcenter_id == cost_center.id) \
                            .filter(Branch.installation_id == get_user().installation_id).filter(
                            Branch.id == branch_id).first()
                        if not employee_cost_center:
                            continue
                        cost_center = oneObject(employee_cost_center, EmployeeCostCenterSchema)
                        cost_value += employee.salary * cost_center.rating_pct / 100
                    costmap_account = Costmapaccount(costmap_id=cost_map_id, account_id=account.id,
                                                     cost_center_id=cost_center.id,
                                                     cost_value=cost_value * social_charge.charge_pct / 100,
                                                     cost_pct=0, cost_center_type=0,
                                                     expense_abs_type=account.expense_abs_type,
                                                     bdg_entry_flag=account.bdgentry_flag, real_cost_value=0)
                    save_to_db(costmap_account)

        elif account.expense_abs_type == 6:
            assets = Asset.query.filter(Asset.depreciable_flag == 1).all()
            for asset in iterate(assets, AssetSchema):
                asset_type = AssetType.query.filter(AssetType.id == asset.type_id).first()
                if not asset_type:
                    continue
                asset_type = oneObject(asset_type, AssetTypeSchema)
                asset_cost_center = AssetCostCenter.query.filter(AssetCostCenter.asset_id == asset.id).first()
                if not asset_cost_center:
                    continue
                asset_cost_center = iterate(asset_cost_center, AssetCostCenterSchema)
                costmap_account = Costmapaccount(costmap_id=cost_map_id, account_id=account.id,
                                                 cost_center_id=asset_cost_center.costcenter_id,
                                                 cost_value=asset.inventory_qt * asset.cost_price_unit *
                                                            (asset_type.interest_year_pct / 12 / 100),
                                                 cost_pct=0, cost_center_type=0,
                                                 expense_abs_type=account.expense_abs_type,
                                                 bdg_entry_flag=account.bdgentry_flag, real_cost_value=0)
                save_to_db(costmap_account)

        elif account.expense_abs_type == 8:
            entries = EntryAccount.query.filter(EntryAccount.account_id == account.id).all()
            for entry in iterate(entries, EntryAccountSchema):
                entry_cost_center = CostCenter.query.filter(CostCenter.id == entry.account_id).first()
                if not entry_cost_center:
                    continue
                entry_cost_center = oneObject(entry_cost_center, CostCenterSchema)
                costmap_account = Costmapaccount(costmap_id=cost_map_id, account_id=account.id,
                                                 cost_center_id=entry_cost_center.costcenter_id,
                                                 cost_value=entry.entry_value,
                                                 cost_pct=0, cost_center_type=0,
                                                 expense_abs_type=account.expense_abs_type,
                                                 bdg_entry_flag=account.bdgentry_flag, real_cost_value=0)

                save_to_db(costmap_account)
        Costmapcostcenter.query.filter(Costmapcostcenter.costmap_id == cost_map_id).delete()
        costmap_accounts = Costmapaccount.query.filter(Costmapaccount.costmap_id == cost_map_id).all()
        costmap_accounts = iterate(costmap_accounts, CostmapaccountSchema)
        cost_centers = list(set([cost_map_account.cost_center_id for cost_map_account in costmap_accounts]))
        for cost_center in cost_centers:
            values = [cost_map_account.cost_value for cost_map_account in costmap_accounts if
                      cost_map_account.cost_center_id == cost_center]
            value = sum(values)
            costmap_costcenter = Costmapcostcenter(
                costmap_id=cost_map_id,
                cost_center_id=cost_center,
                cost_value=value,
                cost_pct=0,
                cost_center_type=0,
            )
            save_to_db(costmap_costcenter)

        ratio = CostCenterRatio.query.join(CostCenter, CostCenter.id == CostCenterRatio.costcenter_part_id) \
            .join(Branch, Branch.id == CostCenter.branch_id).filter(Branch.id == branch_id).all()
        CostmapcostcenterAbs.query.filter(CostmapcostcenterAbs.costmap_id == cost_map_id).delete()
        for costcenter in iterate(ratio, CostCenterRatioSchema):
            val = Costmapcostcenter.query.filter(Costmapcostcenter.costmap_id == cost_map_id). \
                filter(Costmapcostcenter.cost_center_id == costcenter.costcenter_id).first()
            if not val:
                continue
            costmap_costcenter_abs = CostmapcostcenterAbs(
                costmap_id=cost_map_id,
                costmap_costcenter_id=val.id,
                cost_center_id=costcenter.costcenter_id,
                costcenter_abs_id=costcenter.costcenter_part_id,
                abs_cost_value=val.cost_value * costcenter.rating_pct / 100,
                abs_cost_pct=costcenter.rating_pct,
            )
            save_to_db(costmap_costcenter_abs)


class GetCostMaps(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='cost_maps')
    def get(self):
        # calculateCostMap(4, 3, 3, 2017)
        data = self.parser.parse_args()
        cost_maps = CostMap.query.join(Branch, Branch.id == CostMap.branch_id) \
            .filter(CostMap.branch_id == data['branch_id']).all()
        schema = CostMapSchema(many=True)
        cost_maps_data = [] if len(cost_maps) == 0 else schema.dump(cost_maps).data
        add = able('add', 'cost_maps')
        edit = able('edit', 'cost_maps')
        delete = able('delete', 'cost_maps')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'cost_maps': cost_maps_data
        }


class GetCostMap(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='cost_maps')
    def get(self, cost_map_id):
        data = self.parser.parse_args()
        cost_maps = CostMap.query.filter_by(id=cost_map_id).join(Branch, Branch.id == CostMap.branch_id) \
            .filter(CostMap.branch_id == data['branch_id']).all()
        schema = CostMapSchema(many=True)
        cost_maps_data = {} if len(cost_maps) == 0 else schema.dump(cost_maps).data[0]
        add = able('add', 'cost_maps')
        edit = able('edit', 'cost_maps')
        delete = able('delete', 'cost_maps')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'cost_map': cost_maps_data
        }


class RecalculateCostMap(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='cost_maps')
    def post(self, cost_map_id):
        data = self.parser.parse_args()
        cost_maps = CostMap.query.filter_by(id=cost_map_id).join(Branch, Branch.id == CostMap.branch_id) \
            .filter(CostMap.branch_id == data['branch_id']).all()
        schema = CostMapSchema(many=True)
        cost_maps_data = None if len(cost_maps) == 0 else schema.dump(cost_maps).data[0]
        if cost_maps_data:
            calculateCostMap(cost_map_id, cost_maps_data['branch_id'], cost_maps_data['year'], cost_maps_data['month'])
            return {
                'status': 1
            }
        else:
            return {
                'status': 0
            }


class InUseCostMap(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='cost_maps')
    def post(self, cost_map_id):
        data = self.parser.parse_args()
        cost_map = CostMap.query.filter_by(id=cost_map_id).join(Branch, Branch.id == CostMap.branch_id) \
            .filter(CostMap.branch_id == data['branch_id']).first()
        if cost_map:
            for map in CostMap.query.join(Branch, Branch.id == CostMap.branch_id) \
                    .filter(CostMap.branch_id == data['branch_id']).all():
                map.in_use = 0
                save_to_db(map)
            cost_map.in_use = 1
            save_to_db(cost_map)
            return {
                'status': 1
            }
        else:
            return {
                'status': 0
            }


class AddCostMap(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('year', help='This field cannot be blank', required=True)
        self.parser.add_argument('month', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='cost_maps')
    def post(self):
        data = self.parser.parse_args()
        cost_maps = CostMap.query.filter_by(year=data['year']).filter_by(month=data['month']) \
            .join(Branch, Branch.id == CostMap.branch_id) \
            .filter(CostMap.branch_id == data['branch_id']).first()
        if cost_maps:
            return {
                'status': 0,
                'errors': ['Cost map with the same year and month already exists']
            }
        errors = checkApportionment(data['branch_id'])
        if len(errors) > 0:
            return {
                'status': 0,
                'errors': errors
            }
        cost_map = CostMap(
            year=data['year'],
            month=data['month'],
            branch_id=data['branch_id'],
        )
        try:
            save_to_db(cost_map)
            calculateCostMap(cost_map.id, cost_map.branch_id, cost_map.year, cost_map.month)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteCostMap(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('ids', help='This field cannot be blank', required=True)

    @jwt_required
    @can('delete', 'cost_maps')
    def post(self, cost_map_id):
        data = self.parser.parse_args()
        if cost_map_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            cost_maps = CostMap.query.filter(CostMap.id.in_(data['ids'])).join(Branch, Branch.id == CostMap.branch_id) \
                .filter(CostMap.branch_id == data['branch_id']).all()

        else:
            cost_maps = CostMap.query.filter(CostMap.id == cost_map_id).join(Branch, Branch.id == CostMap.branch_id) \
                .filter(CostMap.branch_id == data['branch_id']).first()
            if not cost_maps:
                return {'status': 0}
        try:
            delete_from_db(cost_maps)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditCostMap(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('ip_address', help='This field cannot be blank', required=True)
        self.parser.add_argument('nic_address', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='cost_maps')
    def post(self, cost_map_id):
        data = self.parser.parse_args()
        user = get_user()
        cost_map = CostMap.query.filter_by(id=cost_map_id).first()
        if not cost_map:
            return {'status': 0}
        columns = ['name', 'ip_address', 'nic_address']
        for i in columns:
            setattr(cost_map, '%s' % i, data[i])
        try:
            save_to_db(cost_map)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_cost_maps_routes():
    main_api.add_resource(GetCostMap, '/api/cost_map/<cost_map_id>')
    main_api.add_resource(RecalculateCostMap, '/api/cost_map/recalculate/<cost_map_id>')
    main_api.add_resource(InUseCostMap, '/api/cost_map/in_use/<cost_map_id>')
    main_api.add_resource(GetCostMaps, '/api/cost_maps')  # View
    main_api.add_resource(AddCostMap, '/api/cost_maps/add')  # Add
    main_api.add_resource(EditCostMap, '/api/cost_maps/edit/<cost_map_id>')  # Edit
    main_api.add_resource(DeleteCostMap, '/api/cost_maps/delete/<cost_map_id>')  # Delete

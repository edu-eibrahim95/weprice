from flask_restful import Resource, reqparse
from main_api import main_api
from models import Branch, BranchSchema, User, CostCenter, CostCenterSchema, \
    CostCenterRatioSchema, CostCenterTaxesSchema, CostCenterComSchema, TaxSchema, Tax, \
    CostCenterRatio, CostCenterTaxes, CostCenterCom
from db import save_to_db, delete_from_db, raw_query
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetCostCenters(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='cost_centers')
    def get(self):
        data = self.parser.parse_args()
        cost_centers = CostCenter.query.join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id) \
            .filter(Branch.id == data['branch_id']).all()
        schema = CostCenterSchema(many=True)
        cost_centers_data = [] if len(cost_centers) == 0 else schema.dump(cost_centers).data
        add = able('add', 'cost_centers')
        edit = able('edit', 'cost_centers')
        delete = able('delete', 'cost_centers')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'cost_centers': cost_centers_data
        }


class GetCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='cost_centers')
    def get(self, cost_center_id):
        data = self.parser.parse_args()
        cost_centers = CostCenter.query.filter_by(id=cost_center_id).join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id) \
            .filter(Branch.id == data['branch_id']).all()

        schema = CostCenterSchema(many=True)
        branches_data = [] if len(cost_centers) == 0 else schema.dump(cost_centers).data
        add = able('add', 'cost_centers')
        edit = able('edit', 'cost_centers')
        delete = able('delete', 'cost_centers')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'cost_center': branches_data[0]
        }


class GetCostCenterRatio(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='cost_centers')
    def get(self, cost_center_id):
        data = self.parser.parse_args()
        cost_center = CostCenter.query.filter_by(id=cost_center_id).join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).first()
        if not cost_center:
            return {'status': 0}
        ratio = CostCenterRatio.query.filter_by(costcenter_id=cost_center_id) \
            .join(CostCenter, CostCenter.id == CostCenterRatio.costcenter_id) \
            .join(Branch, Branch.id == CostCenter.branch_id).filter(Branch.id == data['branch_id']).all()
        for i in ratio:
            i.name = i.costcenter_part_id
        schema = CostCenterRatioSchema(many=True)
        cost_centers_data = schema.dump(ratio).data if len(ratio) > 0 else []
        taxes = CostCenterTaxes.query.filter_by(costcenter_id=cost_center_id) \
            .join(CostCenter, CostCenter.id == CostCenterTaxes.costcenter_id) \
            .join(Branch, Branch.id == CostCenter.branch_id).filter(Branch.id == data['branch_id']).all()
        for i in taxes:
            i.name = i.tax_id
        taxes_schema = CostCenterTaxesSchema(many=True)
        cost_centers_taxes_data = taxes_schema.dump(taxes).data if len(taxes) > 0 else []
        coms = CostCenterCom.query.filter_by(costcenter_id=cost_center_id) \
            .join(CostCenter, CostCenter.id == CostCenterCom.costcenter_id) \
            .join(Branch, Branch.id == CostCenter.branch_id).filter(Branch.id == data['branch_id']).all()
        for i in coms:
            i.name = i.costcenter_com_id
        coms_schema = CostCenterComSchema(many=True)
        cost_centers_coms_data = coms_schema.dump(coms).data if len(coms) > 0 else []
        add = able('add', 'cost_centers')
        edit = able('edit', 'cost_centers')
        delete = able('delete', 'cost_centers')
        cost_centers = CostCenter.query.filter(CostCenter.id != cost_center_id).join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).filter(Branch.id == data['branch_id']).all()
        cost_center_options = {"0": "Choose Cost Center"}
        for cost_center in cost_centers:
            cost_center_options["{}".format(cost_center.id)] = cost_center.name
        taxes_options = Tax.query.filter_by(installation_id=get_user().installation_id).all()
        tax_options = {"0": "Choose Tax"}
        for tax in taxes_options:
            tax_options[tax.id] = tax.name
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'ratio': cost_centers_data,
            'taxes': cost_centers_taxes_data,
            'coms': cost_centers_coms_data,
            'cost_centers_options': cost_center_options,
            'taxes_options': tax_options
        }


class AddCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('area', help='This field cannot be blank', required=True)
        self.parser.add_argument('workhours_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('workdays_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('machines_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('sales_revenue', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='cost_centers')
    def post(self):
        data = self.parser.parse_args()
        cost_center = CostCenter(
            name=data['name'],
            type=data['type'],
            area=data['area'],
            workhours_qt=data['workhours_qt'],
            workdays_qt=data['workdays_qt'],
            machines_qt=data['machines_qt'],
            sales_revenue=data['sales_revenue'],
            branch_id=data['branch_id'],
        )
        try:
            save_to_db(cost_center)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class AddCostCenterRatio(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_part_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('rating_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='cost_centers')
    def post(self, cost_center_id):
        data = self.parser.parse_args()
        cost_center = CostCenter.query.filter_by(id=data['costcenter_part_id']).join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id) \
            .filter(Branch.id == data['branch_id']) \
            .first()
        if not cost_center:
            return {'status': 0}
        cost_center_ratio = CostCenterRatio(
            costcenter_id=cost_center_id,
            costcenter_part_id=data['costcenter_part_id'],
            rating_pct=data['rating_pct'],
        )
        try:
            save_to_db(cost_center_ratio)
            return {'status': 1, 'id': cost_center_ratio.id}
        except:
            return {'status': 0}, 500


class AddCostCenterTax(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('tax_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('tax_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='cost_centers')
    def post(self, cost_center_id):
        data = self.parser.parse_args()
        cost_center = CostCenterTaxes(
            costcenter_id=cost_center_id,
            tax_id=data['tax_id'],
            tax_pct=data['tax_pct'],
        )
        try:
            save_to_db(cost_center)
            return {'status': 1, 'id': cost_center.id}
        except:
            return {'status': 0}, 500


class AddCostCenterCom(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_com_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('day_rec_qt', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='cost_centers')
    def post(self, cost_center_id):
        data = self.parser.parse_args()
        cost_center = CostCenterCom(
            costcenter_id=cost_center_id,
            costcenter_com_id=data['costcenter_com_id'],
            day_rec_qt=data['day_rec_qt'],
        )
        try:
            save_to_db(cost_center)
            return {'status': 1, 'id': cost_center.id}
        except:
            return {'status': 0}, 500


class EditCostCenterRatio(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_part_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('rating_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='cost_centers')
    def post(self, cost_center_id, cost_center_ratio_id):
        data = self.parser.parse_args()
        cost_center = CostCenter.query.filter_by(id=data['costcenter_part_id']).join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id) \
            .filter(Branch.id == data['branch_id']) \
            .first()
        if not cost_center:
            return {'status': 0}
        cost_center_ratio = CostCenterRatio.query.filter_by(id=cost_center_ratio_id).filter_by(costcenter_id=cost_center_id) \
            .join(CostCenter, CostCenter.id == CostCenterRatio.costcenter_id) \
            .join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.id == data['branch_id']) \
            .filter(Branch.installation_id == get_user().installation_id).first()
        cost_center_ratio.costcenter_id = cost_center_id
        cost_center_ratio.costcenter_part_id = data['costcenter_part_id']
        cost_center_ratio.rating_pct = data['rating_pct']
        try:
            save_to_db(cost_center_ratio)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditCostCenterTax(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('tax_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('tax_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='cost_centers')
    def post(self, cost_center_id, cost_center_tax_id):
        data = self.parser.parse_args()
        cost_center = CostCenterTaxes.query.filter_by(id=cost_center_tax_id).filter_by(costcenter_id=cost_center_id) \
            .join(CostCenter, CostCenter.id == CostCenterTaxes.costcenter_id) \
            .join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id) \
            .filter(Branch.id == data['branch_id']) \
            .first()
        cost_center.costcenter_id = cost_center_id
        cost_center.tax_id = data['tax_id']
        cost_center.tax_pct = data['tax_pct']
        try:
            save_to_db(cost_center)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditCostCenterCom(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_com_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('day_rec_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='cost_centers')
    def post(self, cost_center_id, cost_center_com_id):
        data = self.parser.parse_args()
        cost_center = CostCenter.query.filter_by(id=data['costcenter_com_id']) \
            .join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id) \
            .filter(Branch.id == data['branch_id']) \
            .first()
        if not cost_center:
            return {'status': 0}
        cost_center = CostCenterCom.query.filter_by(id=cost_center_com_id).filter_by(costcenter_id=cost_center_id) \
            .join(CostCenter, CostCenter.id == CostCenterCom.costcenter_id) \
            .join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id) \
            .filter(Branch.id == data['branch_id']) \
            .first()
        cost_center.costcenter_id=cost_center_id
        cost_center.costcenter_com_id=data['costcenter_com_id']
        cost_center.day_rec_qt=data['day_rec_qt']
        try:
            save_to_db(cost_center)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('area', help='This field cannot be blank', required=True)
        self.parser.add_argument('workhours_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('workdays_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('machines_qt', help='This field cannot be blank', required=True)
        self.parser.add_argument('sales_revenue', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='cost_centers')
    def post(self, cost_center_id):
        data = self.parser.parse_args()
        cost_center = CostCenter.query.filter_by(id=cost_center_id).join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).first()
        if not cost_center:
            return {'status': 0}
        for i in  ['name', 'type', 'area', 'workhours_qt', 'workdays_qt', 'machines_qt', 'sales_revenue', 'branch_id']:
            setattr(cost_center, '%s' % i, data[i])
        try:
            save_to_db(cost_center)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteCostCenter(Resource):
    @jwt_required
    @can('delete', 'cost_centers')
    def post(self, cost_center_id):
        if cost_center_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            cost_centers = CostCenter.query.filter(CostCenter.id.in_(data['ids'])).join(Branch, Branch.id == CostCenter.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).all()

        else:
            cost_centers = CostCenter.query.filter_by(id=cost_center_id).join(Branch, Branch.id == CostCenter.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).first()
            if not cost_centers:
                return {'status': 0}
        try:
            delete_from_db(cost_centers)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteCostCenterRatio(Resource):
    @jwt_required
    @can('delete', 'cost_centers')
    def post(self, cost_center_id, cost_center_ratio_id):
        if cost_center_ratio_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            cost_centers = CostCenterRatio.query.filter(CostCenterRatio.id.in_(data['ids'])) \
                .join(CostCenter, CostCenter.id == CostCenterRatio.costcenter_id) \
                .join(Branch, Branch.id == CostCenter.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).all()

        else:
            cost_centers = CostCenterRatio.query.filter_by(id=cost_center_ratio_id).filter_by(costcenter_id=cost_center_id) \
                .join(CostCenter, CostCenter.id == CostCenterRatio.costcenter_id) \
                .join(Branch, Branch.id == CostCenter.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).first()
            if not cost_centers:
                return {'status': 0}
        try:
            delete_from_db(cost_centers)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteCostCenterTax(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can('delete', 'cost_centers')
    def post(self, cost_center_id, cost_center_tax_id):
        if cost_center_tax_id == 'mass':
            self.parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = self.parser.parse_args()
            cost_centers = CostCenterTaxes.query.filter(CostCenterTaxes.costcenter_id.in_(data['ids'])) \
                .join(CostCenter, CostCenter.id == CostCenterTaxes.costcenter_id) \
                .join(Branch, Branch.id == CostCenter.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id)\
                .filter(Branch.id == data['branch_id'])\
                .all()

        else:
            data = self.parser.parse_args()
            cost_centers = CostCenterTaxes.query.filter_by(id=cost_center_tax_id).filter_by(costcenter_id=cost_center_id) \
                .join(CostCenter, CostCenter.id == CostCenterTaxes.costcenter_id) \
                .join(Branch, Branch.id == CostCenter.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id)\
                .filter(Branch.id == data['branch_id'])\
                .first()
            if not cost_centers:
                return {'status': 0}
        try:
            delete_from_db(cost_centers)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteCostCenterCom(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can('delete', 'cost_centers')
    def post(self, cost_center_id, cost_center_com_id):
        if cost_center_com_id == 'mass':
            self.parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = self.parser.parse_args()
            cost_centers = CostCenterCom.query.filter(CostCenterCom.costcenter_id.in_(data['ids'])) \
                .join(CostCenter, CostCenter.id == CostCenterCom.costcenter_id) \
                .join(Branch, Branch.id == CostCenter.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id)\
                .filter(Branch.id == data['branch_id'])\
                .all()

        else:
            data = self.parser.parse_args()
            cost_centers = CostCenterCom.query.filter_by(id=cost_center_com_id).filter_by(costcenter_id=cost_center_id) \
                .join(CostCenter, CostCenter.id == CostCenterCom.costcenter_id) \
                .join(Branch, Branch.id == CostCenter.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id)\
                .filter(Branch.id == data['branch_id'])\
                .first()
            if not cost_centers:
                return {'status': 0}
        try:
            delete_from_db(cost_centers)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_cost_center_routes():
    main_api.add_resource(GetCostCenter, '/api/cost_center/<cost_center_id>')
    main_api.add_resource(GetCostCenters, '/api/cost_centers')                         # View
    main_api.add_resource(GetCostCenterRatio, '/api/cost_centers/ratio/<cost_center_id>')                         # View
    main_api.add_resource(AddCostCenterRatio, '/api/cost_centers/ratio/<cost_center_id>/add')                    # View
    main_api.add_resource(EditCostCenterRatio,
                          '/api/cost_centers/ratio/<cost_center_id>/edit/<cost_center_ratio_id>')              # View
    main_api.add_resource(DeleteCostCenterRatio,
                          '/api/cost_centers/ratio/<cost_center_id>/delete/<cost_center_ratio_id>')
    main_api.add_resource(AddCostCenterTax, '/api/cost_centers/tax/<cost_center_id>/add')                         # View
    main_api.add_resource(EditCostCenterTax,
                          '/api/cost_centers/tax/<cost_center_id>/edit/<cost_center_tax_id>')                    # View
    main_api.add_resource(DeleteCostCenterTax,
                          '/api/cost_centers/tax/<cost_center_id>/delete/<cost_center_tax_id>')
    main_api.add_resource(AddCostCenterCom, '/api/cost_centers/com/<cost_center_id>/add')                         # View
    main_api.add_resource(EditCostCenterCom,
                          '/api/cost_centers/com/<cost_center_id>/edit/<cost_center_com_id>')                    # View
    main_api.add_resource(DeleteCostCenterCom,
                          '/api/cost_centers/com/<cost_center_id>/delete/<cost_center_com_id>')
    main_api.add_resource(AddCostCenter, '/api/cost_centers/add')                       # Add
    main_api.add_resource(EditCostCenter, '/api/cost_centers/edit/<cost_center_id>')         # Edit
    main_api.add_resource(DeleteCostCenter, '/api/cost_centers/delete/<cost_center_id>')     # Delete


# raw_query("""
# SELECT costcenter_costcenter.* , costcenter_costcenter.costcenter_part_id as name FROM  costcenter_costcenter, cost_centers
# WHERE costcenter_costcenter.costcenter_id = cost_centers.id AND cost_centers.id = {}
# """.format(cost_center.id))

# raw_query("""
# SELECT costcenter_taxes.*, taxes.id as name FROM costcenter_taxes, cost_centers, taxes
# WHERE costcenter_taxes.costcenter_id = cost_centers.id AND taxes.id = costcenter_taxes.tax_id  AND cost_centers.id = {}
# """.format(cost_center.id))

#             raw_query("""
# SELECT costcenter_coms.*, b.id as name FROM costcenter_coms, cost_centers a, cost_centers b
# WHERE costcenter_coms.costcenter_id = a.id AND b.id = costcenter_coms.costcenter_com_id  AND a.id = {}
# """.format(cost_center.id))
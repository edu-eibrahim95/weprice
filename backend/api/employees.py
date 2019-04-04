from flask_restful import Resource, reqparse
from backend.main_api import main_api
from backend.models import Employee, EmployeeSchema, User, Branch, EmployeeCostCenterSchema, EmployeeCostCenter, CostCenter
from backend.db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from backend.api.utils import can, able, get_user


class GetEmployees(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='employees')
    def get(self):
        data = self.parser.parse_args()
        employees = Employee.query.join(Branch, Branch.id == Employee.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id)\
            .filter(Branch.id == data['branch_id'])\
            .all()
        schema = EmployeeSchema(many=True)
        employees_data = [] if len(employees) == 0 else schema.dump(employees).data
        add = able('add', 'employees')
        edit = able('edit', 'employees')
        delete = able('delete', 'employees')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'employees': employees_data
        }


class GetEmployeeCostCenters(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='employees')
    def get(self, employee_id):
        data = self.parser.parse_args()
        employees = EmployeeCostCenter.query.join(Employee, Employee.id == EmployeeCostCenter.employee_id) \
            .join(Branch, Branch.id == Employee.branch_id) \
            .filter(employee_id == Employee.id) \
            .filter(Branch.installation_id == get_user().installation_id)\
            .filter(Branch.id == data['branch_id'])\
            .all()
        for i in employees:
            i.name = i.costcenter_id
        schema = EmployeeCostCenterSchema(many=True)
        employees_data = [] if len(employees) == 0 else schema.dump(employees).data
        cost_centers = CostCenter.query.join(Branch, Branch.id == CostCenter.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).filter(Branch.id == data['branch_id']).all()
        cost_center_options = {"0": "Choose Cost Center"}
        for cost_center in cost_centers:
            cost_center_options["{}".format(cost_center.id)] = cost_center.name
        add = able('add', 'employees')
        edit = able('edit', 'employees')
        delete = able('delete', 'employees')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'cost_centers': employees_data,
            'cost_center_options': cost_center_options
        }


class AddEmployeeCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('rating_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('direct_labor_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='employees')
    def post(self, employee_id):
        data = self.parser.parse_args()
        employee_cost_center = EmployeeCostCenter(
            employee_id=employee_id,
            costcenter_id=data['costcenter_id'],
            rating_pct=data['rating_pct'],
            direct_labor_pct=data['direct_labor_pct'],
        )
        try:
            save_to_db(employee_cost_center)
            return {'status': 1, 'id': employee_cost_center.id}
        except:
            return {'status': 0}, 500


class EditEmployeeCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('costcenter_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('rating_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('direct_labor_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='employees')
    def post(self, employee_id, employee_cost_center_id):
        data = self.parser.parse_args()
        employee_cost_center = EmployeeCostCenter.query.filter_by(id=employee_cost_center_id)\
            .join(Employee, Employee.id == EmployeeCostCenter.employee_id)\
            .filter(Employee.id == employee_id)\
            .join(Branch, Branch.id == Employee.branch_id)\
            .filter(Branch.installation_id == get_user().installation_id)\
            .filter(Branch.id == data['branch_id'])\
            .first()
        if not employee_cost_center:
            return {'status': 0}
        employee_cost_center.employee_id = employee_id
        employee_cost_center.costcenter_id = data['costcenter_id']
        employee_cost_center.rating_pct = data['rating_pct']
        employee_cost_center.direct_labor_pct = data['direct_labor_pct']
        try:
            save_to_db(employee_cost_center)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteEmployeeCostCenter(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can('delete', 'employees')
    def post(self, employee_id, employee_cost_center_id):
        user = get_user()
        if employee_cost_center_id == 'mass':
            self.parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = self.parser.parse_args()
            employees_cost_centers = EmployeeCostCenter.query.filter(EmployeeCostCenter.id.in_(data['ids']))\
                .join(Employee, Employee.id == EmployeeCostCenter.employee_id)\
                .filter(Employee.id == employee_id) \
                .join(Branch, Branch.id == Employee.branch_id) \
                .filter(Branch.installation_id == user.installation_id)\
                .filter(Branch.id == data['branch_id'])\
                .all()

        else:
            data = self.parser.parse_args()
            print(data)
            employees_cost_centers = EmployeeCostCenter.query.filter_by(id=employee_cost_center_id)\
                .join(Employee, Employee.id == EmployeeCostCenter.employee_id)\
                .filter(Employee.id == employee_id) \
                .join(Branch, Branch.id == Employee.branch_id) \
                .filter(Branch.installation_id == user.installation_id)\
                .filter(Branch.id == data['branch_id'])\
                .first()
            if not employees_cost_centers:
                return {'status': 0}
        try:
            delete_from_db(employees_cost_centers)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class GetEmployee(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='employees')
    def get(self, employee_id):
        data = self.parser.parse_args()
        employees = Employee.query.filter_by(id=employee_id).join(Branch, Branch.id == Employee.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id)\
            .filter(Branch.id == data['branch_id'])\
            .all()
        schema = EmployeeSchema(many=True)
        employees_data = [] if len(employees) == 0 else schema.dump(employees).data
        add = able('add', 'employees')
        edit = able('edit', 'employees')
        delete = able('delete', 'employees')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'employee': employees_data[0]
        }


class AddEmployee(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('hire_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('dismiss_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('salary', help='This field cannot be blank', required=True)
        self.parser.add_argument('extra_salary', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='employees')
    def post(self):
        data = self.parser.parse_args()
        employee = Employee(
            name=data['name'],
            type=data['type'],
            hire_date=data['hire_date'],
            dismiss_date=data['dismiss_date'],
            salary=data['salary'],
            extra_salary=data['extra_salary'],
            branch_id=data['branch_id'],
        )
        try:
            save_to_db(employee)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteEmployee(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can('delete', 'employees')
    def post(self, employee_id):
        if employee_id == 'mass':
            self.parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = self.parser.parse_args()
            employees = Employee.query.filter(Employee.id.in_(data['ids'])).join(Branch, Branch.id == Employee.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id)\
                .filter(Branch.id == data['branch_id'])\
                .all()

        else:
            data = self.parser.parse_args()
            employees = Employee.query.filter_by(id=employee_id).join(Branch, Branch.id == Employee.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id)\
                .filter(Branch.id == data['branch_id'])\
                .first()
            if not employees:
                return {'status': 0}
        try:
            delete_from_db(employees)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditEmployee(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('hire_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('dismiss_date', help='This field cannot be blank', required=True)
        self.parser.add_argument('salary', help='This field cannot be blank', required=True)
        self.parser.add_argument('extra_salary', help='This field cannot be blank', required=True)
        self.parser.add_argument('branch_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='employees')
    def post(self, employee_id):
        data = self.parser.parse_args()
        employee = Employee.query.filter_by(id=employee_id).join(Branch, Branch.id == Employee.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id)\
            .filter(Branch.id == data['branch_id'])\
            .first()
        if not employee:
            return {'status': 0}
        columns = ['type', 'name', 'type', 'hire_date', 'dismiss_date', 'salary',
                   'extra_salary', 'branch_id']
        for i in columns:
            setattr(employee, '%s' % i, data[i])
        try:
            save_to_db(employee)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_employees_routes():
    main_api.add_resource(GetEmployee, '/api/employee/<employee_id>')
    main_api.add_resource(GetEmployees, '/api/employees')                         # View
    main_api.add_resource(GetEmployeeCostCenters, '/api/employees/cost_centers/<employee_id>')                         # View
    main_api.add_resource(AddEmployeeCostCenter, '/api/employees/cost_centers/<employee_id>/add')                         # View
    main_api.add_resource(EditEmployeeCostCenter, '/api/employees/cost_centers/<employee_id>/edit/<employee_cost_center_id>')
    main_api.add_resource(DeleteEmployeeCostCenter, '/api/employees/cost_centers/<employee_id>/delete/<employee_cost_center_id>')
    main_api.add_resource(AddEmployee, '/api/employees/add')                       # Add
    main_api.add_resource(EditEmployee, '/api/employees/edit/<employee_id>')         # Edit
    main_api.add_resource(DeleteEmployee, '/api/employees/delete/<employee_id>')     # Delete

from flask_restful import Resource, reqparse
from main_api import main_api
from models import Employee, EmployeeSchema, User, Branch
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetEmployees(Resource):
    @jwt_required
    @can(action='view', thing='employees')
    def get(self):
        employees = Employee.query.join(Branch, Branch.id == Employee.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).all()
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


class GetEmployee(Resource):
    @jwt_required
    @can(action='view', thing='employees')
    def get(self, employee_id):
        employees = Employee.query.filter_by(id=employee_id).join(Branch, Branch.id == Employee.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).all()
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
        user = get_user()
        employee= Employee(
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
    @jwt_required
    @can('delete', 'employees')
    def post(self, employee_id):
        user = get_user()
        if employee_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            employees = Employee.query.filter(Employee.id.in_(data['ids'])).join(Branch, Branch.id == Employee.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).all()

        else:
            employees = Employee.query.filter_by(id=employee_id).join(Branch, Branch.id == Employee.branch_id) \
                .filter(Branch.installation_id == get_user().installation_id).first()
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
        user = get_user()
        employee= Employee.query.filter_by(id=employee_id).join(Branch, Branch.id == Employee.branch_id) \
            .filter(Branch.installation_id == get_user().installation_id).first()
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
    main_api.add_resource(AddEmployee, '/api/employees/add')                       # Add
    main_api.add_resource(EditEmployee, '/api/employees/edit/<employee_id>')         # Edit
    main_api.add_resource(DeleteEmployee, '/api/employees/delete/<employee_id>')     # Delete

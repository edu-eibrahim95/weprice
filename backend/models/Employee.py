from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Employee(db.Model):
    __tablename__ = 'employees'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    type = db.Column(db.Integer, default=0)
    hire_date = db.Column(db.Date, nullable=True)
    dismiss_date = db.Column(db.Date, nullable=True)
    salary = db.Column(db.Float, default=0)
    extra_salary = db.Column(db.Float, default=0)
    branch_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class EmployeeSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    type = fields.Number()
    hire_date = fields.Date()
    dismiss_date = fields.Date()
    salary = fields.Number()
    extra_salary = fields.Number()
    branch_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

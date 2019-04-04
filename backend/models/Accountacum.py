from backend.db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Accountacum(db.Model):
    __tablename__ = 'account_branch_acum'
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, nullable=False, default=0)
    branch_id = db.Column(db.Integer, nullable=False, default=0)
    year = db.Column(db.Integer, nullable=False, default=0)
    month = db.Column(db.Integer, nullable=False, default=0)
    acum_value = db.Column(db.Float, nullable=False, default=0)
    acum_ded = db.Column(db.Float, nullable=False, default=0)
    acum_recov = db.Column(db.Float, nullable=False, default=0)


class AccountacumSchema(Schema):
    id = fields.Number()
    account_id = fields.Number()
    branch_id = fields.Number()
    year = fields.Number()
    month = fields.Number()
    acum_value = fields.Number()
    acum_ded = fields.Number()
    acum_recov = fields.Number()

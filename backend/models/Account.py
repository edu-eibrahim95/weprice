from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Account(db.Model):
    __tablename__ = 'accounts'
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(255), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    type = db.Column(db.Integer, default=0)
    nat = db.Column(db.Integer, default=0)
    expense_type = db.Column(db.Integer, default=0)
    expense_abs_type = db.Column(db.Integer, default=0)
    bdgentry_value = db.Column(db.Float, default=0)
    bdgentry_flag = db.Column(db.Integer, default=0)
    expense_limit_pct = db.Column(db.Float, default=0)
    expense_var_pct = db.Column(db.Float, default=0)
    months_qt_avg = db.Column(db.Integer, default=0)
    expense_ded_pct = db.Column(db.Float, default=0)
    expense_recov_pct = db.Column(db.Float, default=0)
    earning_distrib_flag = db.Column(db.Integer, default=0)
    revenue_flag = db.Column(db.Integer, default=0)
    recov_id = db.Column(db.Integer, default=0)
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))



class AccountSchema(Schema):
    id = fields.Number()
    code = fields.Str()
    description = fields.Str()
    type = fields.Number()
    nat = fields.Number()
    expense_type = fields.Number()
    expense_abs_type = fields.Number()
    bdgentry_value = fields.Number()
    bdgentry_flag = fields.Number()
    expense_limit_pct = fields.Number()
    expense_var_pct = fields.Number()
    months_qt_avg = fields.Number()
    expense_ded_pct = fields.Number()
    expense_recov_pct = fields.Number()
    earning_distrib_flag = fields.Number()
    revenue_flag = fields.Number()
    recov_id = fields.Number()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

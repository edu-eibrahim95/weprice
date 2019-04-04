from backend.db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Costmapaccount(db.Model):
    __tablename__ = 'costmap_account'
    id = db.Column(db.Integer, primary_key=True)
    costmap_id = db.Column(db.Integer, nullable=False, default=0)
    account_id = db.Column(db.Integer, nullable=False, default=0)
    cost_center_id = db.Column(db.Integer, nullable=False, default=0)
    cost_value = db.Column(db.Float, nullable=False, default=0)
    cost_pct = db.Column(db.Float, nullable=False, default=0)
    cost_center_type = db.Column(db.Integer, nullable=False, default=0)
    expense_abs_type = db.Column(db.Integer, nullable=False, default=0)
    bdg_entry_flag = db.Column(db.Integer, nullable=False, default=0)
    real_cost_value = db.Column(db.Float, nullable=False, default=0)

    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class CostmapaccountSchema(Schema):
    id = fields.Number()
    costmap_id = fields.Number()
    account_id = fields.Number()
    cost_center_id = fields.Number()
    cost_value = fields.Number()
    cost_pct = fields.Number()
    cost_center_type = fields.Number()
    expense_abs_type = fields.Number()
    bdg_entry_flag = fields.Number()
    real_cost_value = fields.Number()
    created_at = fields.String()
    updated_at = fields.String()

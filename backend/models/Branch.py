from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Branch(db.Model):
    __tablename__ = 'branches'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True, default='name')
    type = db.Column(db.Integer, default=0)
    area = db.Column(db.Float, default=0)
    months_avg_qt = db.Column(db.Integer, default=0)
    workhours_day_qt = db.Column(db.Float, default=0)
    workdays_month_qt = db.Column(db.Float, default=0)
    interest_month_pct = db.Column(db.Float, default=0)
    raw_material_rate_pct = db.Column(db.Float, default=0)
    months_stock_qt = db.Column(db.Float, default=0)
    days_rec_qt = db.Column(db.Float, default=0)
    installation_id = db.Column(db.Integer, default=0)
    parent_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class BranchSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    type = fields.Number()
    area = fields.Number()
    months_avg_qt = fields.Number()
    workhours_day_qt = fields.Number()
    workdays_month_qt = fields.Number()
    raw_material_rate_pct = fields.Number()
    months_stock_qt = fields.Number()
    days_rec_qt = fields.Number()
    installation_id = fields.Number()
    parent_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

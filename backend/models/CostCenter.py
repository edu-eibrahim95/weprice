from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class CostCenter(db.Model):
    __tablename__ = 'cost_centers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    type = db.Column(db.Integer, default=0)
    area = db.Column(db.Float, default=0)
    workhours_qt = db.Column(db.Float, default=0)
    workdays_qt = db.Column(db.Float, default=0)
    machines_qt = db.Column(db.Integer, default=0)
    sales_revenue = db.Column(db.Float, default=0)
    mkt_id = db.Column(db.Integer, default=0)
    branch_id = db.Column(db.Integer, default=0)
    parent_id = db.Column(db.Integer, default=0)
    rating_pct = db.Column(db.Float, default=0)
    day_rect_qt = db.Column(db.Float, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class CostCenterSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    type = fields.Number()
    area = fields.Number()
    workhours_qt = fields.Number()
    workdays_qt = fields.Number()
    machines_qt = fields.Number()
    sales_revenue = fields.Number()
    mkt_id = fields.Number()
    branch_id = fields.Number()
    parent_id = fields.Number()
    rating_pct = fields.Number()
    day_rect_qt = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

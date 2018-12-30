from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Asset(db.Model):
    __tablename__ = 'assets'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), nullable=True)
    description_det = db.Column(db.String(255), nullable=True)
    inventory_qt = db.Column(db.Float, default=0)
    cost_price_unit = db.Column(db.Float, default=0)
    acquisition_date = db.Column(db.Date, nullable=True)
    start_depr_date = db.Column(db.Date, nullable=True)
    expiration_depr_date = db.Column(db.Date, nullable=True)
    depreciable_flag = db.Column(db.Integer, default=0)
    type_id = db.Column(db.Integer, default=0)
    local_id = db.Column(db.Integer, default=0)
    branch_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class AssetSchema(Schema):
    id = fields.Number()
    description = fields.Str()
    description_det = fields.Str()
    inventory_qt = fields.Number()
    cost_price_unit = fields.Number()
    acquisition_date = fields.Date()
    start_depr_date = fields.Date()
    expiration_depr_date = fields.Date()
    depreciable_flag = fields.Number()
    type_id = fields.Number()
    local_id = fields.Number()
    branch_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

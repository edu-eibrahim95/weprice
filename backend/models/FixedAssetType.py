from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class AssetType(db.Model):
    __tablename__ = 'asset_types'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), nullable=True)
    years_lifetime = db.Column(db.Float, default=0)
    residual_lifetime = db.Column(db.Float, default=0)
    interest_year_pct = db.Column(db.Float, default=0)
    account_id = db.Column(db.Integer, default=0)
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class AssetTypeSchema(Schema):
    id = fields.Number()
    description = fields.Str()
    years_lifetime = fields.Number()
    residual_lifetime = fields.Number()
    interest_year_pct = fields.Number()
    account_id = fields.Number()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


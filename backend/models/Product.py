from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    type = db.Column(db.Integer, default=0)
    product_group = db.Column(db.Integer, default=0)
    internal_code = db.Column(db.String(255), nullable=True)
    unit = db.Column(db.String(255), nullable=True)
    currency_type = db.Column(db.Integer, default=0)
    cost_price = db.Column(db.Float, default=0)
    sale_price = db.Column(db.Float, default=0)
    daysterm_recpt = db.Column(db.Float, default=0)
    product_class_id = db.Column(db.Integer, default=0)
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class ProductSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    description = fields.Str()
    type = fields.Number()
    product_group = fields.Number()
    internal_code = fields.Str()
    unit = fields.Str()
    currency_type = fields.Number()
    cost_price = fields.Number()
    sale_price = fields.Number()
    daysterm_recpt = fields.Number()
    product_class_id = fields.Number()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

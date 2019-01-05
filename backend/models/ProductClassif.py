from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class ProductClassif(db.Model):
    __tablename__ = 'product_classifications'
    id = db.Column(db.Integer, primary_key=True)
    product_group = db.Column(db.Integer, default=0)
    initial_flag = db.Column(db.Integer, default=0)
    description = db.Column(db.String(255), nullable=True)
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class ProductClassifSchema(Schema):
    id = fields.Number()
    product_group = fields.Number()
    initial_flag = fields.Number()
    description = fields.Str()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


class ProductClassifParent(db.Model):
    __tablename__ = 'product_classifications_parent'
    id = db.Column(db.Integer, primary_key=True)
    product_classification_id = db.Column(db.Integer, default=0)
    product_classification_parent_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class ProductClassifParentSchema(Schema):
    id = fields.Number()
    product_classification_id = fields.Number()
    product_classification_parent_id = fields.Number()
    name = fields.String()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


class ProductClassifTaxes(db.Model):
    __tablename__ = 'product_classifications_taxes'
    id = db.Column(db.Integer, primary_key=True)
    product_classification_id = db.Column(db.Integer, default=0)
    tax_id = db.Column(db.Integer, default=0)
    purchase_pct = db.Column(db.Float, default=0)
    sale_pct = db.Column(db.Float, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class ProductClassifTaxesSchema(Schema):
    id = fields.Number()
    product_classification_id = fields.Number()
    tax_id = fields.Number()
    name = fields.String()
    purchase_pct = fields.Number()
    sale_pct = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Tax(db.Model):
    __tablename__ = 'taxes'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    initial_date = db.Column(db.Date, nullable=True)
    final_date = db.Column(db.Date, nullable=True)
    purchase_pct = db.Column(db.Float, default=0)
    sale_pct = db.Column(db.Float, default=0)
    account_id = db.Column(db.Integer, default=0)
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))

class TaxSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    initial_date = fields.Date()
    final_date = fields.Date()
    purchase_pct = fields.Number()
    sale_pct = fields.Number()
    account_id = fields.Number()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


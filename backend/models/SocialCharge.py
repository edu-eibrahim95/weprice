from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class SocialCharge(db.Model):
    __tablename__ = 'social_charges'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), nullable=True)
    initial_date = db.Column(db.Date, nullable=True)
    final_date = db.Column(db.Date, nullable=True)
    charge_pct = db.Column(db.Float, default=0)
    account_id = db.Column(db.Integer, default=0)
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class SocialChargeSchema(Schema):
    id = fields.Number()
    description = fields.Str()
    initial_date = fields.Date()
    final_date = fields.Date()
    charge_pct = fields.Number()
    account_id = fields.Number()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


class SocialChargeAccount(db.Model):
    __tablename__ = 'social_charge_accounts'
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, default=0)
    social_charge_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class SocialChargeAccountSchema(Schema):
    id = fields.Number()
    name = fields.Number()
    account_id = fields.Number()
    social_charge_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

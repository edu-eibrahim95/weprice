from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Spot(db.Model):
    __tablename__ = 'spots'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    ip_address = db.Column(db.String(255), nullable=True)
    nic_address = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class SpotSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    ip_address = fields.Str()
    nic_address = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


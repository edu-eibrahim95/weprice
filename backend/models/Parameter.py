from backend.db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Parameter(db.Model):
    __tablename__ = 'parameters'
    id = db.Column(db.Integer, primary_key=True)
    attribute = db.Column(db.String(255), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    default_value = db.Column(db.String(255), nullable=True)
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class ParameterSchema(Schema):
    id = fields.Number()
    attribute = fields.Str()
    description = fields.Str()
    default_value = fields.Str()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Local(db.Model):
    __tablename__ = 'locals'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), nullable=True)
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class LocalSchema(Schema):
    id = fields.Number()
    description = fields.Str()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


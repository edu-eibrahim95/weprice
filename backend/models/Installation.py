from backend.db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Installation(db.Model):
    __tablename__ = 'installations'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True, default='name')
    lang = db.Column(db.String(10), nullable=True, default='en')
    branch_qt = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class InstallationSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    lang = fields.Str()
    branch_qt = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

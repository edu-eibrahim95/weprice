from backend.db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class CostMap(db.Model):
    __tablename__ = 'cost_maps'
    id = db.Column(db.Integer, primary_key=True)
    in_use = db.Column(db.Integer, nullable=False, default=0)
    branch_id = db.Column(db.Integer, nullable=False, default=0)
    year = db.Column(db.Integer, nullable=True)
    month = db.Column(db.Integer, nullable=True)
    calculated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class CostMapSchema(Schema):
    id = fields.Number()
    branch_id = fields.Number()
    in_use = fields.Number()
    year = fields.Number()
    month = fields.Number()
    calculated_at = fields.DateTime()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


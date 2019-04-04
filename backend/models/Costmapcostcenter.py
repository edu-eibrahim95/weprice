from backend.db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class Costmapcostcenter(db.Model):
    __tablename__ = 'costmap_costcenter'
    id = db.Column(db.Integer, primary_key=True)
    costmap_id = db.Column(db.Integer, nullable=False, default=0)
    cost_center_id = db.Column(db.Integer, nullable=False, default=0)
    cost_value = db.Column(db.Float, nullable=False, default=0)
    cost_pct = db.Column(db.Float, nullable=False, default=0)
    cost_center_type = db.Column(db.Integer, nullable=False, default=0)

    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))

from backend.db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class CostmapcostcenterAbs(db.Model):
    __tablename__ = 'costmap_costcenter_abs'
    id = db.Column(db.Integer, primary_key=True)
    costmap_id = db.Column(db.Integer, nullable=False, default=0)
    cost_center_id = db.Column(db.Integer, nullable=False, default=0)
    costmap_costcenter_id = db.Column(db.Integer, nullable=False, default=0)
    costcenter_abs_id = db.Column(db.Float, nullable=False, default=0)
    abs_cost_value = db.Column(db.Float, nullable=False, default=0)
    abs_cost_pct = db.Column(db.Float, nullable=False, default=0)

    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))

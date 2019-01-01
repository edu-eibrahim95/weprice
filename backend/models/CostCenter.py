from db import db
from sqlalchemy import text
from marshmallow import Schema, fields


class CostCenter(db.Model):
    __tablename__ = 'cost_centers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    type = db.Column(db.Integer, default=0)
    area = db.Column(db.Float, default=0)
    workhours_qt = db.Column(db.Float, default=0)
    workdays_qt = db.Column(db.Float, default=0)
    machines_qt = db.Column(db.Integer, default=0)
    sales_revenue = db.Column(db.Float, default=0)
    branch_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class CostCenterSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    type = fields.Number()
    area = fields.Number()
    workhours_qt = fields.Number()
    workdays_qt = fields.Number()
    machines_qt = fields.Number()
    sales_revenue = fields.Number()
    branch_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


class CostCenterRatio(db.Model):
    __tablename__ = 'costcenter_costcenter'
    id = db.Column(db.Integer, primary_key=True)
    costcenter_id = db.Column(db.Integer)
    costcenter_part_id = db.Column(db.Integer)
    rating_pct = db.Column(db.Float)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class CostCenterRatioSchema(Schema):
    id = fields.Number()
    costcenter_part_id = fields.Number()
    name = fields.Str()
    rating_pct = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


class CostCenterTaxes(db.Model):
    __tablename__ = 'costcenter_taxes'
    id = db.Column(db.Integer, primary_key=True)
    costcenter_id = db.Column(db.Integer)
    tax_id = db.Column(db.Integer)
    tax_pct = db.Column(db.Float)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class CostCenterTaxesSchema(Schema):
    id = fields.Number()
    costcenter_id = fields.Number()
    tax_id = fields.Number()
    name = fields.Str()
    tax_pct = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


class CostCenterCom(db.Model):
    __tablename__ = 'costcenter_coms'
    id = db.Column(db.Integer, primary_key=True)
    costcenter_id = db.Column(db.Integer)
    costcenter_com_id = db.Column(db.Integer)
    day_rec_qt = db.Column(db.Float)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))


class CostCenterComSchema(Schema):
    id = fields.Number()
    costcenter_id = fields.Number()
    costcenter_com_id = fields.Number()
    name = fields.Str()
    day_rec_qt = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
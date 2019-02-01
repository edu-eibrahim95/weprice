from db import db
from sqlalchemy import text, ForeignKey
from marshmallow import Schema, fields
from sqlalchemy.orm import relationship


class EntryAccount(db.Model):
    __tablename__ = 'entry_accounts'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.Integer, default=0)
    reference_date = db.Column(db.Date, default=0)
    entry_date = db.Column(db.Date, default=0)
    payment_date = db.Column(db.Date, default=0)
    due_date = db.Column(db.Date, default=0)
    historic = db.Column(db.String(255), nullable=True)
    entry_value = db.Column(db.Float, default=0)
    account_id = db.Column(db.Integer, ForeignKey("accounts.id"))
    cost_center_id = db.Column(db.Integer, ForeignKey("cost_centers.id"))
    branch_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))

    account = relationship("Account", foreign_keys=[account_id])
    cost_center = relationship("CostCenter", foreign_keys=[cost_center_id])

    @property
    def account_name(self):
        if self.account is not None:
            return self.account.code
        return None

    @property
    def cost_center_name(self):
        if self.account is not None:
            return self.cost_center.name
        return None


class EntryAccountSchema(Schema):
    id = fields.Number()
    type = fields.Number()
    reference_date = fields.Str()
    entry_date = fields.Str()
    payment_date = fields.Str()
    due_date = fields.Str()
    historic = fields.Str()
    account_name = fields.Str()
    cost_center_name = fields.Str()
    entry_value = fields.Number()
    account_id = fields.Number()
    cost_center_id = fields.Number()
    branch_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

#
# class EntryAccountTaxes(db.Model):
#     __tablename__ = 'product_taxes'
#     id = db.Column(db.Integer, primary_key=True)
#     product_id = db.Column(db.Integer, default=0)
#     tax_id = db.Column(db.Integer, default=0)
#     purchase_pct = db.Column(db.Float, default=0)
#     sale_pct = db.Column(db.Float, default=0)
#     created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
#     updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
#
#
# class EntryAccountTaxesSchema(Schema):
#     id = fields.Number()
#     product_id = fields.Number()
#     tax_id = fields.Number()
#     name = fields.Number()
#     purchase_pct = fields.Number()
#     sale_pct = fields.Number()
#     created_at = fields.DateTime()
#     updated_at = fields.DateTime()

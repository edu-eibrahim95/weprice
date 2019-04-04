from backend.db import db
from sqlalchemy import text, ForeignKey
from marshmallow import Schema, fields
from sqlalchemy.orm import relationship


class Tax(db.Model):
    __tablename__ = 'taxes'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    initial_date = db.Column(db.Date, nullable=True)
    final_date = db.Column(db.Date, nullable=True)
    purchase_pct = db.Column(db.Float, default=0)
    sale_pct = db.Column(db.Float, default=0)
    account_id = db.Column(db.Integer, ForeignKey("accounts.id"))
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))

    account = relationship("Account", foreign_keys=[account_id])

    @property
    def account_name(self):
        if self.account is not None:
            return self.account.code
        return None


class TaxSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    account_name = fields.Str()
    initial_date = fields.Date()
    final_date = fields.Date()
    purchase_pct = fields.Number()
    sale_pct = fields.Number()
    account_id = fields.Number()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


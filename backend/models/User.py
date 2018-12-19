from db import db
from sqlalchemy import text
from passlib.hash import pbkdf2_sha256 as sha256
from marshmallow import Schema, fields


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True, default='name')
    password = db.Column(db.String(255))
    full_name = db.Column(db.String(255), nullable=True, default='full_name')
    email = db.Column(db.String(255), unique=True)
    master_flag = db.Column(db.Integer, default=0)
    admin_flag = db.Column(db.Integer, default=0)
    active_flag = db.Column(db.Integer, default=0)
    initial_date = db.Column(db.Date, nullable=True)
    final_date = db.Column(db.Date, nullable=True)
    first_access_flag = db.Column(db.Integer, default=0)
    installation_id = db.Column(db.Integer, default=0)
    created_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = db.Column(db.TIMESTAMP, nullable=True, server_default=text('CURRENT_TIMESTAMP'))

    @staticmethod
    def generate_hash(password):
        return sha256.hash(password)

    @staticmethod
    def verify_hash(password, hash):
        return sha256.verify(password, hash)


class UserSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    password = fields.Str()
    full_name = fields.Str()
    email = fields.Str()
    master_flag = fields.Number()
    admin_flag = fields.Number()
    active_flag = fields.Number()
    initial_date = fields.Date()
    final_date = fields.Date()
    first_access_flag = fields.Number()
    installation_id = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

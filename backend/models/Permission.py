from db import db


class Permission(db.Model):
    __tablename__ = 'permissions'
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer)
    type = db.Column(db.String(255))
    value = db.Column(db.Integer, default=0)

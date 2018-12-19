from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def save_to_db(e):
    db.session.add(e)
    db.session.commit()
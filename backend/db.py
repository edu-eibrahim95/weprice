from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def save_to_db(e):
    db.session.add(e)
    db.session.commit()
    db.session.close()


def delete_from_db(e):
    l = e if isinstance(e, list) else [e]
    for i in l:
        db.session.delete(i)
    db.session.commit()
    db.session.close()

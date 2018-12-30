from functools import wraps
from flask import request, redirect, abort
from models import User, Permission
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_current_user)


def decode_permissions(num):
    result = [0, 0, 0, 0]
    for i in [0, 1, 2, 3]:
        result[i] = num % 2
        num = num // 2
    return result


def get_user():
    identity = get_jwt_identity()
    return User.query.filter_by(email=identity).first()


def get_permission(vtype):
    user_id = get_user().id
    return Permission.query.filter_by(type=vtype).filter(Permission.user.in_([0, user_id])).order_by(Permission.user.desc()).first()


def can(action=None, thing=None):
    def decorator(fn):
        @wraps(fn)
        def decorated_function(*args, **kwargs):
            if not able(action=action, thing=thing):
                abort(401)
            return fn(*args, **kwargs)
        return decorated_function
    return decorator


def able(action=None, thing=None):
    permission_set = {
        'view': 0,
        'add': 1,
        'edit': 2,
        'delete': 3,
    }
    user = get_user()
    if not user:
        return False
    if user.admin_flag == 1:
        return True
    p = get_permission(thing)
    n = permission_set[action]
    p = decode_permissions(p.value)
    if p[n] == 0:
        return False
    return True

import os, sys
sys.path.append(os.path.abspath('../'))
from flask import Flask, request, render_template, send_from_directory
from backend.db import db
from flask_cors import CORS
from backend.api import register_api_routes
from backend.main_api import main_api
from flask_jwt_extended import JWTManager


template_dir = os.path.dirname(os.path.realpath(__file__)) + '/../frontend/dist/frontend/'
app = Flask(__name__, template_folder=template_dir)
application = app
app.config.from_object('backend.config')
CORS(app)
db.init_app(app)
jwt = JWTManager(app)


@app.route('/assets/i18n/<file>')
def assets(file):
    return send_from_directory(template_dir+'/assets/i18n/', file)


@app.route('/<path>')
def hello_world(path):
    return send_from_directory(template_dir, path)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("index.html")


register_api_routes()
main_api.init_app(app)

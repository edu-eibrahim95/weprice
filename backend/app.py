from flask import Flask, request, render_template, send_from_directory
from db import db
from flask_cors import CORS
from datetime import datetime
from api import register_api_routes
import os
from main_api import main_api
from flask_jwt_extended import JWTManager


template_dir = os.path.abspath('../frontend/dist/frontend/')
app = Flask(__name__, template_folder=template_dir)
application = app
app.config.from_object('config')
CORS(app)
db.init_app(app)
jwt = JWTManager(app)


@app.route('/<path>')
def hello_world(path):
    # return render_template("index.html")
    return send_from_directory(template_dir, path)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("index.html")



register_api_routes()
main_api.init_app(app)
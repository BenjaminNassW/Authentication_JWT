"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import datetime
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    body = request.get_json()
    onePeople = User.query.filter_by(email=body['email']).first()
    if (onePeople):
        return jsonify({"error":"ya existe"}),418
    else:
        nuevo_usuario = User(email=body['email'], password=body['password'], is_active=True)
        db.session.add(nuevo_usuario)
        db.session.commit()
        return jsonify(body),201

@api.route('/login', methods=['POST'])
def login():
    body=request.get_json()
    onePeople = User.query.filter_by(email=body['email'], password=body['password']).first()
    if onePeople:
        token=create_access_token(identity=body['email'])
        return jsonify({'access_token':token, 'mensaje':'inicio de sesion correcto'}),200
    else:
        return jsonify({"error":"no existe usuario"}),418

@api.route('/privada',methods=['GET'])
@jwt_required()
def privada():
    return jsonify({"mensaje":"tienes permiso","permiso":True})
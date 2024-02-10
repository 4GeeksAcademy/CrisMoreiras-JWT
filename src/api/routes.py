"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/user', methods=['GET'])
@jwt_required()
def get_users():
    all_users = User.query.all()
    results = list(map(lambda user: user.serialize(), all_users))
    return jsonify(results),200

@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    results = User.query.filter_by(id=user_id).first()
    return jsonify(results.serialize()), 200

##LOGIN##

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    print(user)

    if user == None:
        return jsonify({"msg": "could not find email"}), 401
    if password != user.password:
        return jsonify({"msg": "bad password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

##SIGNUP##

@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    print(body)

    user = User.query.filter_by(email=body["email"]).first()
    print(user)
    if user == None:
        new_user = User(email=body["email"], password=body["password"], is_active=True)
        db.session.add(new_user)
        db.session.commit()
        response_body = {"msg" : "Created User"}
        return jsonify(response_body), 200
    else:
        return jsonify ({"msg":"User already exists"}), 401

   

from flask import Flask, jsonify, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from db_worker import *
import hashlib
app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)
#BACKEND
@app.route('/createdatabase', methods=['GET'])
def createdatabase():
    try:

        conn = create_connection()
        create_users_table(conn)
        create_jobs_table(conn)
        create_feedbacks_table(conn)
        close_connection(conn)
        return jsonify({'success': 'Succesfuly created!'}), 200
    except:
        return jsonify({'error': 'Database error!'}), 400


@app.route('/user/login', methods=['POST'])
def login():
    try:

        if not request.json or not 'username' in request.json or not 'password' in request.json:
            return jsonify({'error': 'The username and password field is required'}), 400
        conn = create_connection()
        password = request.json['password']
        text_encoded = password.encode('utf-8')
        hash_object = hashlib.md5(text_encoded)
        hex_dig = hash_object.hexdigest()
        user = get_user(conn,request.json['username'],hex_dig)
        close_connection(conn)
        return jsonify(dict(user)), 200
    except:
        return jsonify({'error': 'Database error!'}), 400
    

@app.route('/user/signup', methods=['POST'])
def signup():
    try:

        if not request.json or not 'username' in request.json or not 'password' in request.json or not 'email' in request.json or not 'name' in request.json or not 'surname' in request.json:
            return jsonify({'error': 'The reuqired field is required'}), 400
        conn = create_connection()
        password = request.json['password']
        text_encoded = password.encode('utf-8')
        hash_object = hashlib.md5(text_encoded)
        hex_dig = hash_object.hexdigest()
        if add_user(conn,request.json['username'],hex_dig,request.json['email'],request.json['name'],request.json['surname'],request.json['birth_year']):
            return jsonify({'success': 'Signup successful!'}), 200
        else:
            return jsonify({'error': 'Signup error!'}), 400
    except:
        return jsonify({'error': 'Database error!'}), 400

from flask import Flask, jsonify, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from db_worker import *
import hashlib
from flask_jwt import JWT, jwt_required, current_identity
from models import *

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)
app.config['SECRET_KEY'] = 'super-secret'

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
            return jsonify({'error': 'The username and password field are required'}), 400
        conn = create_connection()
        password = request.json['password']
        text_encoded = password.encode('utf-8')
        hash_object = hashlib.md5(text_encoded)
        hex_dig = hash_object.hexdigest()
        user = get_user(conn,request.json['username'],hex_dig)
        close_connection(conn)
        dict_user = {
            "id":user[0],
            "username":user[1],
            "email":user[3],
            "name":user[4],
            "surname":user[5],
            "birthYear":user[6]
        }
        message = {
            "message":"Success",
            "data":dict_user
        }
        
        return jsonify((message)), 200
    except Exception as e:
        print(e)
        return jsonify({'message': 'Error'}), 400
    

@app.route('/user/signup', methods=['POST'])
def signup():
    try:

        if not request.json or not 'username' in request.json or not 'password' in request.json or not 'email' in request.json or not 'name' in request.json or not 'surname' in request.json or not "birthYear" in request.json:
            return jsonify({'error': 'Some fields are required'}), 400
        conn = create_connection()
        password = request.json['password']
        text_encoded = password.encode('utf-8')
        hash_object = hashlib.md5(text_encoded)
        hex_dig = hash_object.hexdigest()
        if add_user(conn,request.json['username'],hex_dig,request.json['email'],request.json['name'],request.json['surname'],request.json['birthYear']):
            return jsonify({'success': 'Signup successful!'}), 200
        else:
            return jsonify({'error': 'Signup error!'}), 400
    except:
        return jsonify({'error': 'Database error!'}), 400

@app.route('/job/add', methods=['POST'])
def addjob():
    try:

        if not request.json or not 'employee_id' in request.json or not 'employer_id' in request.json or not 'title' in request.json or not 'description' in request.json or not 'createDate' in request.json:
            return jsonify({'error': 'Some fields are required'}), 400
        conn = create_connection()
        if add_job(conn,request.json['employee_id'],request.json['employer_id'],request.json['title'],request.json['description'],request.json['createDate']):
            return jsonify({'success': 'Job created succesfuly!'}), 200
        else:
            return jsonify({'error': 'Creation error!'}), 400
    except:
        return jsonify({'error': 'Database error!'}), 400

@app.route('/job/<int:employer_id>', methods=['GET'])
def getjob(employer_id):
    try:
        conn = create_connection()
        rows = get_job(conn,employer_id)
        return jsonify(rows), 200
    except:
        return jsonify({'error': 'Database error!'}), 400

@app.route('/feedback/add', methods=['POST'])
def addfeedback():
    try:

        if not request.json or not 'job_id' in request.json or not 'employer_id' in request.json or not 'rate' in request.json or not 'comment' in request.json or not 'createDate' in request.json:
            return jsonify({'error': 'Some fields are required'}), 400
        conn = create_connection()
        if add_feedback(conn,request.json['job_id'],request.json['employer_id'],request.json['rate'],request.json['comment'],request.json['createDate']):
            return jsonify({'success': 'Feedback created succesfuly!'}), 200
        else:
            return jsonify({'error': 'Creation error!'}), 400
    except:
        return jsonify({'error': 'Database error!'}), 400

@app.route('/feedback/<int:job_id>', methods=['GET'])
def  getfeecback(job_id):
    try:
        conn = create_connection()
        rows = get_feedback(conn,job_id)
        return jsonify(rows), 200
    except:
        return jsonify({'error': 'Database error!'}), 400


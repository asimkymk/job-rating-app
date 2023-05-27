from flask import Flask, jsonify, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from db_worker import *
import hashlib
from flask_jwt import JWT, jwt_required, current_identity
from models import *
import math
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
        return jsonify({"message":"Error",'data': 'Database error!'}), 400


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
        return jsonify({"message":"Error",'data': 'Database error!'}), 400
    

@app.route('/user/signup', methods=['POST'])
def signup():
    try:

        if not request.json or not 'username' in request.json or not 'password' in request.json or not 'email' in request.json or not 'name' in request.json or not 'surname' in request.json or not "birthYear" in request.json:
            return jsonify({"message":"Error",'data': 'Some fields are missing!'}), 400
        conn = create_connection()
        password = request.json['password']
        text_encoded = password.encode('utf-8')
        hash_object = hashlib.md5(text_encoded)
        hex_dig = hash_object.hexdigest()
        if add_user(conn,request.json['username'],hex_dig,request.json['email'],request.json['name'],request.json['surname'],request.json['birthYear']):
            message = {
            "message":"Success",
            "data":"Signup proccess succesful."
            }
            return jsonify(message), 200
        else:
            return jsonify({"message":"Error",'data': 'Signup error!'}), 400
    except:
        return jsonify({"message":"Error",'data': 'Database error!'}), 400

@app.route('/job/add', methods=['POST'])
def addjob():
    try:

        if not request.json or not 'employee_id' in request.json or not 'title' in request.json or not 'description' in request.json or not 'status' in request.json or not 'createDate' in request.json:
            return jsonify({"message":"Error",'data': 'Fields are required!'}), 400
        conn = create_connection()
        print(request.json)
        if add_job(conn,request.json['employee_id'],request.json['title'],request.json['description'],int(request.json['status']),request.json['createDate']):
            message = {
            "message":"Success",
            "data":"Creating job was succesful."
            }
            return jsonify(message), 200
        else:
            return jsonify({"message":"Error",'data': 'Creation error!'}), 400
    except Exception as e:
        print(e)
        return jsonify({"message":"Error",'data': 'Database error!'}), 400

@app.route('/job', methods=['GET'])
def getalljob():
    try:
        conn = create_connection()
        rows = get_all_job(conn)
        data = []
        for i in rows:
            if i[8] == None:

                temp = {
                    "id":i[0],
                    "employee_id":i[1],
                    "title":i[2],
                    "description":i[3],
                    "status":i[4],
                    "createDate":i[5],
                    "name":i[6],
                    "surname":i[7],
                    
                    "average_rate":0
                }
            else:
                temp = {
                    "id":i[0],
                    "employee_id":i[1],
                    "title":i[2],
                    "description":i[3],
                    "status":i[4],
                    "createDate":i[5],
                    "name":i[6],
                    "surname":i[7],
                    
                    "average_rate":round(i[8],2)
                }
            data.append(temp)
        message = {
            "message":"Success",
            "data":data
        }
        return jsonify(message), 200
    except Exception as e:
        print(e)
        return jsonify({"message":"Error",'data': 'Database error!'}), 400

@app.route('/job/<int:job_id>', methods=['GET'])
def getjob(job_id):
    try:
        conn = create_connection()
        rows = get_job(conn,job_id=job_id)
        i = rows[0]
        job = {
            "id":i[0],
                "employee_id":i[1],
                "title":i[2],
                "description":i[3],
                "status":i[4],
                "createDate":i[5],
                "name":i[6],
                "surname":i[7],
                "feedbacks":[]
        }
        for i in rows:
            if(i[8] == None):
                continue
            temp = {
                "feeedback_id":i[8],
                "rate":i[9],
                "comment":i[10],
                "createDate":i[11],
                "name":i[12],
                "surname":i[13],
            }
            job['feedbacks'].append(temp)
        message = {
            "message":"Success",
            "data":job
        }
        return jsonify(message), 200
    except:
        return jsonify({"message":"Error",'data': 'Database error!'}), 400
@app.route('/feedback/add', methods=['POST'])
def addfeedbacks():
    try:
        if not request.json or not 'job_id' in request.json or not 'employer_id' in request.json or not 'rate' in request.json or not 'comment' in request.json or not 'createDate' in request.json:
            jsonify({"message":"Error",'data': 'Some field(s) are missing!'}), 400
        conn = create_connection()
        if add_feedback(conn,int(request.json['job_id']),int(request.json['employer_id']),int(request.json['rate']),request.json['comment'],request.json['createDate']):
            message = {
            "message":"Success",
            "data":"Creating feedback was succesful."
            }
            return jsonify(message), 200
        else:
            jsonify({"message":"Error",'data': 'Creation error!'}), 400
    except:
        jsonify({"message":"Error",'data': 'Database error!'}), 400

@app.route('/feedback/<int:job_id>', methods=['GET'])
def  getfeecback(job_id):
    try:
        conn = create_connection()
        rows = get_feedback(conn,job_id)
        return jsonify(rows), 200
    except:
        return jsonify({'error': 'Database error!'}), 400


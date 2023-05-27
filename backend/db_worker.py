import sqlite3
from sqlite3 import Error

def create_connection():
    conn = None
    try:
        conn = sqlite3.connect('./db/all_data.db')
        return conn
    
    except Error as e:
        print(e)

    return conn

def close_connection(conn):
    conn.close()

def create_users_table(conn):
    try:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE users(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                email TEXT UNIQUE,
                name TEXT NOT NULL,
                surname TEXT NOT NULL,
                birthYear INTEGER NOT NULL
            );
        """)
        print("users table created successfully")
    except:
        return False
    return True

def create_jobs_table(conn):
    try:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS jobs(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                employee_id INTEGER NOT NULL,
                title TEXT NOT NULL,
                description TEXT,
                status INTEGER NOT NULL,
                createDate TEXT NOT NULL,
                FOREIGN KEY (employee_id) REFERENCES users (id)
            );
        """)
        conn.commit()
        print("jobs table created successfully")
    except:
        return False
    return True

def create_feedbacks_table(conn):
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS feedbacks(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            job_id INTEGER NOT NULL,
            employer_id INTEGER NOT NULL,
            rate INTEGER NOT NULL,
            comment TEXT NOT NULL,
            createDate TEXT NOT NULL,
            FOREIGN KEY (job_id) REFERENCES jobs (id),
            FOREIGN KEY (employer_id) REFERENCES users (id)
        );
    """)
    conn.commit()
    print("feedbacks table created successfully")


def add_user(conn, username, password, email, name, surname, birth_year):
    cursor = conn.cursor()
    try:
        cursor.execute("""
            INSERT INTO users(username, password, email, name, surname, birthYear)
            VALUES(?, ?, ?, ?, ?, ?)
        """, (username, password, email, name, surname, birth_year))
        conn.commit()
        print("User added successfully")
    except Error as e:
        print(e)
        return False
    return True

def add_job(conn, employee_id, title, description,status, create_date):
    cursor = conn.cursor()
    try:
        cursor.execute("""
            INSERT INTO jobs(employee_id, title, description, status, createDate)
            VALUES(?, ?, ?,?, ?)
        """, (employee_id, title, description, int(status), create_date))
        conn.commit()
        print("Job added successfully")
    except Error as e:
        print(e)
        return False
    return True

def add_feedback(conn, job_id, employer_id, rate, comment, createDate):
    cursor = conn.cursor()
    try:
        cursor.execute("""
            INSERT INTO feedbacks(job_id, employer_id, rate, comment, createDate) 
            VALUES(?, ?, ?, ?, ?);
        """, (job_id, employer_id, rate, comment, createDate))
        conn.commit()
        print("Feedback added successfully")
    except:
        return False
    return True

def get_user(conn, username, password):
    cursor = conn.cursor()
    cursor.execute("""
        SELECT * FROM users WHERE username = ? AND password = ?;
    """, (username, password))
    user = cursor.fetchone()
    print(user)
    if user:
        return user
    else:
        return False

def get_all_job(conn):
    try:
        cursor = conn.cursor()
        cursor.execute("""
        SELECT jobs.*,
       users.name,
       users.surname,
       AVG(feedbacks.rate) AS average_rate
        FROM jobs
        LEFT JOIN feedbacks ON jobs.id = feedbacks.job_id
        INNER JOIN users ON jobs.employee_id = users.id
        GROUP BY jobs.id;
        """,)
        rows = cursor.fetchall()
        if rows:
            return rows
        else:
            return []
    except:
        return False

def get_job(conn,job_id):
    try:
        cursor = conn.cursor()
        cursor.execute("""
           SELECT 
    jobs.id AS "Job ID",
    jobs.employee_id,
    jobs.title,
    jobs.description,
    jobs.status,
    jobs.createDate AS "Job Create Date",
    users.name AS "Employee Name",
    users.surname AS "Employee Surname",
    feedbacks.id AS "Feedback ID",
    feedbacks.rate,
    feedbacks.comment,
    feedbacks.createDate AS "Feedback Create Date",
    feedback_user.name AS "Feedback User Name",
    feedback_user.surname AS "Feedback User Surname"
    FROM jobs
    INNER JOIN users ON jobs.employee_id = users.id
    LEFT JOIN feedbacks ON feedbacks.job_id = jobs.id
    LEFT JOIN users AS feedback_user ON feedbacks.employer_id = feedback_user.id
    WHERE jobs.id = ?;
        """,(job_id,))
        rows = cursor.fetchall()
        if rows:
            return rows
        else:
            return []
    except:
        return False
def get_feedback(conn, job_id):
    cursor = conn.cursor()
    cursor.execute("""
        SELECT * FROM feedbacks WHERE job_id = ?;
    """, (job_id,))
    rows = cursor.fetchall()
    if rows:
        return rows
    else:
        return []
    
def delete_user(conn, user_id):
    try:
        cursor = conn.cursor()
        cursor.execute("""
            DELETE FROM users WHERE id = ?;
        """, (user_id,))
        conn.commit()
        print("User deleted successfully")
    except:
        return False
    return True

def delete_jobs(conn, job_id):
    try:
        cursor = conn.cursor()
        cursor.execute("""
            DELETE FROM jobs WHERE id = ?;
        """, (job_id,))
        conn.commit()
        print("Job deleted successfully")
    except:
        return False
    return True

def delete_feedbacks(conn, feedback_id):
    try:
        cursor = conn.cursor()
        cursor.execute("""
            DELETE FROM feedbacks WHERE id = ?;
        """, (feedback_id,))
        conn.commit()
        print("Feedback deleted successfully")
    except:
        return False
    return True


from flask import Flask, request,jsonify
from flask_cors import CORS
from models import db, User
from flask_migrate import Migrate
from dotenv import load_dotenv

import os
load_dotenv()

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{os.environ['DB_USER']}:{os.environ['DB_PASSWORD']}@{os.environ['DB_HOST']}:{os.environ['DB_PORT']}/{os.environ['DB_NAME']}"
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/user', methods=['GET','POST'])
def add_user():
    new_user = User(
        name=request.json.get('name'),
        email=request.json.get('email'),
        password=request.json.get('password')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message':'User added succesfully'}),201
@app.route('/user/<email>', methods=['GET'])
def get_user(email):
    user = User.query.filter(User.email==email).first()
    if user:
        return user.to_dict(),200
    
    else:
        return jsonify({'message': 'Username does not exist'})  


if __name__ == '__main__':
    app.run(host='localhost', port=5555,debug=True)

from flask import Flask, request,jsonify,make_response
from flask_cors import CORS
from models import db, User,Product,Categories
from flask_migrate import Migrate
from dotenv import load_dotenv
import base64
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
    if User.query.filter(User.email==new_user.email).first():
        return jsonify({'message': 'email already exists'}),409
    if User.query.filter(User.name==new_user.name).first():
        return jsonify({'message': 'username already exists'}),409
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

@app.route('/product', methods=['GET'])
def get_products():
    if request.method == 'GET':
       products = Product.query.all()
    
       response_body =  [product.to_dict() for product in products]
       response = make_response(
            jsonify(response_body),
            200,
            {'Content-Type': 'application/json'}
       )
       return response 
@app.route('/products', methods=['POST'])
def add_product():
    # Check if the form contains a file
    if 'image' not in request.files:
        return jsonify({'message': 'No image file provided'}), 400

    image_file = request.files['image']

    if image_file:
        image_binary = image_file.read()  # Read the image file binary data

        new_product = Product(
            name=request.form.get('name'),
            price=request.form.get('price'),
            description=request.form.get('description'),
            image=image_binary,  # Store image binary data
            categories_id=request.form.get('categories_id')
        )
        
        db.session.add(new_product)
        db.session.commit()
        
        return jsonify({'message': 'Product added successfully'}), 201

    return jsonify({'message': 'Image file is missing'}), 400
@app.route('/category', methods=['POST'])
def add_category():
    new_name =request.json.get('name')
    new_category = Categories(
        name = new_name
    )
    if Categories.query.filter(Categories.name == new_name).first():
        return jsonify({'message' : "Category already exists"}), 409
    else:

        db.session.add(new_category)
        db.session.commit()
        return jsonify({"message": "Categoryadded succesfully"}, 200)

@app.route('/categories', methods= ['GET'])
def get_categories():
    
    if request.method == 'GET':
        categories_to_dict = []
        for category in Categories.query.all():
        
            categories_to_dict.append(category.to_dict())
    
        response = make_response(
            jsonify(categories_to_dict),
            200,
            {'Content-Type':'application/json'}
        )
        return response        
@app.route('/select/category/<int:id>', methods=['GET'])
def get_products_by_id(id):
    filtered_products =[]
    for product in Product.query.filter(Product.categories_id ==id).all():
        filtered_products.append(product.to_dict())
        
    response = make_response(
        filtered_products,
        200,
        {'Content-Type':'application/json'}
    )
    return response
@app.route('/category/<int:id>', methods=['GET','DELETE','PATCH'])
def delete(id):
    if request.method == 'DELETE':
        to_be_deleted = Categories.query.filter_by(id=id).first()      
        db.session.delete(to_be_deleted)
        db.session.commit()
    
        return jsonify({ f"message": f"{to_be_deleted.name} deleted succesfully"})     
    if request.method == 'PATCH':
        category = Categories.query.filter_by(id =id).first()
        for attr in request.json:
            setattr(category, attr, request.json.get(attr))
        db.session.add(category)
        db.session.commit()
        
        category_dict = category.to_dict()
        response = make_response(
            category_dict,
            200,
            {'Content-Type': 'application/json'}
        )
        return response


if __name__ == '__main__':
    app.run(host='localhost', port=5555,debug=True)
   
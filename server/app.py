from flask import Flask, request,jsonify,make_response
from flask_cors import CORS
from models import db, User,Product,Categories,Cart
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager,create_access_token,jwt_required,get_jwt_identity
import base64
import os
load_dotenv()

app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)
jwt = JWTManager(app)

app.config['JWT_SECRET_KEY'] = "Hom3work"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
#app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{os.environ['DB_USER']}:{os.environ['DB_PASSWORD']}@{os.environ['DB_HOST']}:{os.environ['DB_PORT']}/{os.environ['DB_NAME']}"
db.init_app(app)
migrate = Migrate(app, db)
def generate_token(user):
    access_token = create_access_token(identity=user.id)
    return access_token
def hashPasswords(password):
    return bcrypt.generate_password_hash(password).decode('utf-8')
@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Welcome to karanja_shop API'})
@app.route('/user', methods=['GET','POST'])
def add_user():
    if request.method == 'POST':
        password=request.json.get('password')
        hashed_password = hashPasswords(password)
        new_user = User(
            name=request.json.get('name'),
            email=request.json.get('email'),
            password=hashed_password
        )
        if User.query.filter(User.email==new_user.email).first():
            return jsonify({'message': 'email already exists'}),409
        if User.query.filter(User.name==new_user.name).first():
            return jsonify({'message': 'username already exists'}),409
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message':'User added succesfully'}),201   
    if request.method == 'GET':
        users = User.query.all()
        return jsonify([user.to_dict() for user in users])  
@app.route('/admin/user', methods=['GET','POST'])
def add_user():
    if request.method == 'POST':
        password=request.json.get('password')
        hashed_password = hashPasswords(password)
        
        new_user = User(
            name=request.json.get('name'),
            email=request.json.get('email'),
            password=hashed_password,
            role = 'admin'
        )
        if User.query.filter(User.email==new_user.email).first():
            return jsonify({'message': 'email already exists'}),409
        if User.query.filter(User.name==new_user.name).first():
            return jsonify({'message': 'username already exists'}),409
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message':'User added succesfully'}),201   
    if request.method == 'GET':
        users = User.query.all()
        return jsonify([user.to_dict() for user in users]) 
@app.route('/user/<email>', methods=['GET'])
def get_user(email):
    user = User.query.filter(User.email==email).first()
    if user:
        return user.to_dict(),200
    
    else:
        return jsonify({'message': 'Username does not exist'})  
@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    user = User.query.filter_by(email=email).first()
    if user and user.password == password:
        token = generate_token(user)
        return {'token': token}
    return {'error': 'Invalid credentials'}, 401
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
@app.route('/cart', methods=['POST'])
@jwt_required()
def add_to_cart():
    if request.method == 'POST':
        user_id = get_jwt_identity()
        product_id = request.json.get('product_id')
        quantity = request.json.get('quantity')

        
        existing_cart = Cart.query.filter_by(user_id=user_id, product_id=product_id).first()
        if existing_cart:
            existing_cart.quantity += quantity
            db.session.commit()
            return jsonify({'message': 'Product quantity updated in cart'}), 200
        else:
            new_cart = Cart(
                user_id=user_id,
                product_id=product_id,
                quantity=quantity
            )
            db.session.add(new_cart)
            db.session.commit()
            return jsonify({'message': 'Product added to cart successfully'}), 201
@app.route('/getcart', methods=['GET'])
@jwt_required()
def get_cart():
    user_id = get_jwt_identity()
    cart_items = Cart.query.filter_by(user_id=user_id).all()
    cart_items_dict = [item.to_dict() for item in cart_items]
    return jsonify(cart_items_dict), 200


@app.route('/productById/<int:id>', methods=['GET'])
def get_product_by_id(id):  
    
    product = Product.query.filter_by(id=id).first()
    return product.to_dict(),200
    
@app.route('/role/<int:id>', methods=['PATCH']) 
def update_role(id):
    user = User.query.filter_by(id=id).first()
    for attr in request.json:
        setattr(user, attr, request.json.get(attr))
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'Role updated successfully'}), 200   
    
    
if __name__ == '__main__':
    #app.run(host="localhost", port=5555, debug=True)
    app.run(host='0.0.0.0', port=8000, debug=True)
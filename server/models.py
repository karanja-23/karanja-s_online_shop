from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
import base64
db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    
    __tablename__ = 'users'
    
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(255), nullable=False)
    email=db.Column(db.String(255), nullable=False)
    password=db.Column(db.String(255), nullable=False)
    role= db.Column(db.String(255), default='user')
    cart=db.relationship('Cart', back_populates='user')
    serialize_rules = ("-cart")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'password':self.password,
            'email': self.email,
            'role': self.role
        }
    def __repr__(self):
        return f'<Player {self.name}>'
    
class Product(db.Model):
    
    __tablename__ = 'products'
    
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(255), nullable=False)
    price=db.Column(db.Integer, nullable=False)
    description=db.Column(db.String(255), nullable=False)
    image=db.Column(db.LargeBinary, nullable=False)
    status=db.Column(db.String(255), default='active')
    
    categories_id=db.Column(db.Integer, db.ForeignKey('categories.id'))
    category = db.relationship('Categories', back_populates='products')
    carts = db.relationship('Cart', back_populates='product')
    
    def to_dict(self):
        image = self.image

        if image:
          image = base64.b64encode(image).decode('utf-8')  # Ensure the image is Base64 encoded

          category_data = {
            'id': self.category.id if self.category else None,
            'name': self.category.name if self.category else None
        }

        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'image': f"data:image/jpeg;base64,{image}" if image else None,  # Format as base64 image
            'categories_id': self.categories_id,
            'status': self.status,
            'category': category_data
    }
    
class Categories(db.Model, SerializerMixin):
    
    __tablename__ = 'categories'
    
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(255), nullable=False)
    products = db.relationship('Product', back_populates='category')
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }
  
    
class Cart(db.Model, SerializerMixin):
    
    __tablename__ = 'cart'
    
    id=db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'))
    product_id=db.Column(db.Integer, db.ForeignKey('products.id'))
    quantity=db.Column(db.Integer, nullable=False)    
    user = db.relationship('User', back_populates='cart')
    product = db.relationship('Product', back_populates='carts')
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'product': self.product.to_dict()
        }

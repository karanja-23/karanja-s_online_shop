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
    

    def __repr__(self):
        return f'<Player {self.name}>'
    
class Product(db.Model):
    
    __tablename__ = 'products'
    
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(255), nullable=False)
    price=db.Column(db.Integer, nullable=False)
    description=db.Column(db.String(255), nullable=False)
    image=db.Column(db.LargeBinary, nullable=False)
    
    categories_id=db.Column(db.Integer, db.ForeignKey('categories.id'))
    import base64
    
    def to_dict(self):
        image = self.image
        if image:
            image = base64.b64encode(image).decode('utf-8')
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'image': image,
            'categories_id': self.categories_id
        }  
    
class Categories(db.Model, SerializerMixin):
    
    __tablename__ = 'categories'
    
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(255), nullable=False)
    

    

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    
    __tablename__ = 'users'
    
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(255), nullable=False)
    email=db.Column(db.String(255), nullable=False)
    password=db.Column(db.String(255), nullable=False)
    
    def __repr__(self):
        return f'<Player {self.name}>'
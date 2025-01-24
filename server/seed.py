from app import app
from models import db, User,Product

with app.app_context():
    
    Product.query.delete()
    player1 = User( name='Jane Karanja', email='janeamungai@gmail.com', password='1234@!')
    product1 = Product(
        name ="headphones",
        price=1000,
        description="Superb 7.1 Surround Sound - Featuring a high-precision 50mm magnetic neodymium driver to create an immersive gaming experience with stereo surround sound i",
        image=open('../client/src/assets/headphones.jpg', 'rb').read(),
        
    )
  
    db.session.add(product1)
    db.session.commit()
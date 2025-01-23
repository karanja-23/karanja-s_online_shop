from app import app
from models import db, User

with app.app_context():
    User.query.delete()

    player1 = User(id=1, name='Hosea Karanja', email='karanjamungai@gmail.com', password='1234@!')
    db.session.add(player1)
    db.session.commit()
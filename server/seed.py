from app import app
from models import db, Player

with app.app_context():
    Player.query.delete()

    player1 = Player(id=1, name='Hosea Karanja', email='karanjamungai@gmail.com', password='1234@!')
    db.session.add(player1)
    db.session.commit()
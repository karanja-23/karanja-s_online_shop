from flask import Flask
from models import db
from flask_migrate import Migrate
from dotenv import load_dotenv

import os
load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{os.environ['DB_USER']}:{os.environ['DB_PASSWORD']}@{os.environ['DB_HOST']}:{os.environ['DB_PORT']}/{os.environ['DB_NAME']}"
db.init_app(app)
migrate = Migrate(app, db)




if __name__ == '__main__':
    app.run(host='localhost', port=5555,debug=True)

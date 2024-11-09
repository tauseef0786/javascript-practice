# app.py
from flask import Flask, jsonify, request
from models import db, User, Post
import config

app = Flask(__name__)
app.config.from_object(config.Config)
db.init_app(app)

with app.app_context():
    db.create_all()  # Create tables

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'id': user.id, 'username': user.username, 'email': user.email} for user in users])

@app.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    new_post = Post(title=data['title'], content=data['content'], user_id=data['user_id'])
    db.session.add(new_post)
    db.session.commit()
    return jsonify({'id': new_post.id, 'title': new_post.title, 'content': new_post.content}), 201

if __name__ == '__main__':
    app.run(debug=True)

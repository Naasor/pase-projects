from flask import Flask,request,jsonify
app = Flask(__name__)

@app.route('/')
def index():
    return 'Welcome home from Canada'

@app.route('/login')
def login():
    return 'Am logged in.....'

@app.route('/users')
def get_users():
    return 'they are my users'

@app.route('/users/<int:user_id>')
def get_users_by_id(user_id):
    users = ['love', 'jenny', 'mo']
    user = users[user_id]
    return user

@app.route('/users/add', methods=['POST'])
def add_user():
    if request.method =='POST':
        data = request.get_json()
        return jsonify(data)

@app.route('/users/update', methods=['PUT'])
def update_user():
    if request.method == 'PUT':
        data = request.get_json()
        return jsonify(data)

@app.route('/users/delete/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    if request.method == 'DELETE':
        return 'user with ID {} is deleted'.format(user_id)
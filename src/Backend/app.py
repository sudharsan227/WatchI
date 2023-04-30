from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/watchi'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma=Marshmallow(app)

class Details(db.Model):
    name = db.Column(db.String(100),primary_key=True)
    passwrd=db.Column(db.String(100))
    u_role=db.Column(db.String(100))

    def __init__(self,name,passwrd,u_role):
        self.name=name
        self.passwrd=passwrd
        self.u_role=u_role

class Token(db.Model):
    name = db.Column(db.String(100),primary_key=True)
    value=db.Column(db.String(100))

    def __init__(self,name,value):
        self.name=name
        self.value=value

class Detail_Schema(ma.Schema):
    class Meta:
        fields = ('name' , 'passwrd' , 'u_role')

class Token_Schema(ma.Schema):
    class Meta:
        fields = ('name' ,'value')


d_schema=Detail_Schema()
d_schemas=Detail_Schema(many=True)
t_schema=Token_Schema()
t_schemas=Token_Schema(many=True)


@app.route('/get/<name>/' , methods = ['GET'])
def get_user(name):
    details=Details.query.filter_by(name=name).first()
    if details is None:
        return jsonify({})
    # results=d_schemas.dump(details)
    else:
        return d_schema.jsonify(details)
    user = User.query.filter_by(id=user_id).first()

@app.route('/add' , methods = ['POST'])
def add_user():
    name =request.json['name']
    passwrd=request.json['passwrd']
    u_role=request.json['u_role']
 
    details=Details(name,passwrd,u_role)
    db.session.add(details)
    db.session.commit()
    return d_schema.jsonify(details)

@app.route('/get_tok/<name>/' , methods = ['GET'])
def get_token(name):
    details=Token.query.filter_by(name=name).first()
    if details is None:
        return jsonify({'error': 'User not found'}), 404
    # results=d_schemas.dump(details)
    else:
        return t_schema.jsonify(details)

@app.route('/add_token' , methods = ['POST'])
def add_token():
    name =request.json['name']
    value=request.json['value']

    details=Token(name,value)
    db.session.add(details)
    db.session.commit()
    return t_schema.jsonify(details)

if __name__=="__main__":
    app.debug=True
    app.run(host='0.0.0.0', port=81)
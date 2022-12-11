import flask
from flask import jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def plant():
    data = {
        'temperature' : [10,23,32,22],
        'water' : [10,20,30,32],
        'soil' : [329,24,2341,12],
        'light' : [23,12,43,2,3]
    }
    return jsonify(data)

app.run()
from flask import Flask, request

app = Flask(__name__)


@app.route("/solve")
def hello_world():
    print(request.args)

    return {"message": "ok"}

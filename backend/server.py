from flask import Flask, json, request, jsonify
from flask_cors import CORS, cross_origin
from services.solve import solve
from services.utils import transform_to_base64

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route("/solve")
@cross_origin(origin="*", supports_credentials=True)
def mathsolve():
    degree = int(request.args["dg"])

    coefficients = []
    for i in range(degree + 1):
        current = float(request.args[f"c{i}"])
        coefficients.append(current)

    k = float(request.args["k"])
    initial_value = float(request.args["iniv"])
    max_number = int(request.args["max"])
    tolerance = float(request.args["tol"])

    [root, absolute_error, chart_path] = solve(
        coefficients, k, initial_value, max_number, tolerance
    )
    chart64 = transform_to_base64(chart_path)

    return jsonify({"root": root, "absolute_error": absolute_error, "chart": chart64})

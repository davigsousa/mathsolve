from flask import Flask, request
from services.solve import solve
from services.utils import transform_to_base64

app = Flask(__name__)


@app.route("/solve")
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

    return {"root": root, "absolute_error": absolute_error, "chart": chart64}

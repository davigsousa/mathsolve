from time import time
import matplotlib.pyplot as plt
from scipy.optimize import fsolve
import numpy as np
import math


def solve(coefficients, k, initial_value, max_number, tolerance):
    def f(x):
        y = 0
        for i in range(len(coefficients)):
            current = coefficients[i]

            y = y + current * np.power(x, i)

        y = y + k * np.cos(x)
        return y

    response = fsolve(
        f, initial_value, xtol=tolerance, maxfev=max_number, full_output=True
    )
    infos = response[1]
    function_calls = infos["nfev"]

    root = response[0][0]
    absolute_error = abs(f(root) - 0)
    chart_path = generate_error_chart(f, function_calls, initial_value, tolerance)

    return [root, absolute_error, chart_path]


def generate_error_chart(f, function_calls, initial_value, tolerance):
    parcel = math.ceil(function_calls * 0.1)
    iterations = np.arange(parcel, function_calls, parcel)
    iterations = np.append(iterations, function_calls)

    errors = []
    for i in iterations:
        estimated_root = fsolve(f, initial_value, xtol=tolerance, maxfev=i)
        estimated_value = f(estimated_root)

        absolute_error = abs(estimated_value - 0)
        errors.append(absolute_error)

    plt.figure()
    plt.grid()
    plt.plot(iterations, errors, "b-", label="Error due to iteration")
    plt.xlabel("Iterations")
    plt.ylabel("Absolute error")
    plt.legend()

    filename = str(time()).replace(".", "-")
    path = f"{filename}.png"
    plt.savefig(path)

    return path

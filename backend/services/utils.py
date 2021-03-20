import os
import base64


def transform_to_base64(path):
    img64 = None
    with open(path, "rb") as img:
        img64 = base64.b64encode(img.read()).decode("utf-8")

    os.unlink(path)

    return img64

from flask import Flask, jsonify
import pandas as pd
import json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/api/oil-prices')
def get_prices():
    df = pd.read_csv("data/oil_prices.csv")
    return df.to_json(orient="records")

@app.route('/api/change-points')
def get_change_points():
    with open("data/change_points.json") as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/api/events')
def get_events():
    with open("data/events.json") as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

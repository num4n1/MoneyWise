from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

@app.route('/expenses', methods=['GET', 'POST'])
def manage_expenses():
    if request.method == 'POST':
        expense = request.json
        # Here you would normally save to DB
        return jsonify({'message': 'Expense added', 'expense': expense})
    return jsonify({'expenses': []})  # Replace with actual DB data

if __name__ == '__main__':
    app.run(debug=True)

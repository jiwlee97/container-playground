from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/api/v1/jiwlee97')
def github_account():
    return jsonify({
        "message": "Hello from copilot!",
        "github": "jiwlee97", 
        "version": "v1",
        "implementation": "copilot"
    })

@app.route('/healthcheck')
def health_check():
    return jsonify({
        "status": "healthy",
        "message": "Service is running properly"
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
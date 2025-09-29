from flask import Flask
import os

app = Flask(__name__)

@app.route('/api/v1/jiwlee97')
def github_account():
    return {
        "message": "Hello from jiwlee97!",
        "github": "jiwlee97",
        "version": "v1"
    }

@app.route('/healthcheck')
def health_check():
    return {
        "status": "healthy",
        "message": "Service is running properly"
    }

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
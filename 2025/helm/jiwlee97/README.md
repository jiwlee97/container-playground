# jiwlee97 Web Service

A simple web service implementation for the container playground project.

## Overview

This project contains a Python Flask web service that meets all the specified requirements:

- ✅ Located in `2025/helm/jiwlee97/` directory
- ✅ Dockerfile in root directory
- ✅ Web service runs on port 8080 by default
- ✅ Port configurable via `PORT` environment variable
- ✅ Two required API endpoints implemented
- ✅ Helm chart with proper configuration

## API Endpoints

### GET /api/v1/jiwlee97
Returns information about the GitHub account.

```json
{
  "github": "jiwlee97",
  "message": "Hello from jiwlee97!",
  "version": "v1"
}
```

### GET /healthcheck
Returns service health status.

```json
{
  "message": "Service is running properly",
  "status": "healthy"
}
```

## Docker Usage

### Build the image
```bash
docker build -t jiwlee97-app .
```

### Run the container
```bash
docker run -d -p 8080:8080 jiwlee97-app
```

### Run with custom port
```bash
docker run -d -p 9000:9000 -e PORT=9000 jiwlee97-app
```

## Helm Chart

The Helm chart is located in the `charts/` directory and includes:

- **Deployment**: Uses the image template `"{{ .Values.image.name }}"`
- **Service**: NodePort type with port 30080
- **Values**: Configurable via `values.yaml`

### Deploy with Helm
```bash
helm install jiwlee97-app charts/
```

### Template rendering test
```bash
helm template jiwlee97-app charts/
```

## Technical Details

- **Language**: Python 3.11
- **Framework**: Flask 3.0.0
- **Base Image**: python:3.11-slim
- **Default Port**: 8080
- **Health Check**: Available at `/healthcheck`

## Files Structure

```
2025/helm/jiwlee97/
├── Dockerfile          # Docker image definition
├── app.py             # Python Flask application
├── requirements.txt   # Python dependencies
├── README.md          # This documentation
└── charts/            # Helm chart directory
    ├── Chart.yaml
    ├── values.yaml
    └── templates/
        ├── _helpers.tpl
        ├── deployment.yaml
        └── service.yaml
```
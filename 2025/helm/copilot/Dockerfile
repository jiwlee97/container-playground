FROM python:3.11-slim

WORKDIR /app

# Configure SSL certificates and update packages
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org --no-cache-dir -r requirements.txt

# Copy application code
COPY app.py .

# Set default port
ENV PORT=8080
EXPOSE 8080

# Run the application
CMD ["python", "app.py"]
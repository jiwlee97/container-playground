FROM python:3.11-slim

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org -r requirements.txt

# Copy application code
COPY app.py .

# Set environment variables
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start the application
CMD ["python", "app.py"]
const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

// middleware
app.use(express.json());

/**
 * GET /
 * 서비스 웰컴 메시지 반환
 */
const getWelcome = (req, res) =>
  res.json({
    message: "Welcome to Copilot Web Service!",
    timestamp: new Date().toISOString(),
    status: "running",
  });

/**
 * GET /api/v1/copilot
 * 깃허브 계정 정보를 반환합니다.
 */
const getCopilotInfo = (req, res) =>
  res.json({
    github_account: "copilot",
    message: "Hello from Copilot API",
    version: "v1",
    timestamp: new Date().toISOString(),
  });

/**
 * GET /healthcheck
 * Health check를 수행합니다.
 */
const getHealthCheck = (req, res) =>
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    memory: process.memoryUsage(),
  });

// routes
app.get("/", getWelcome);
app.get("/api/v1/copilot", getCopilotInfo);
app.get("/healthcheck", getHealthCheck);

// start server
app.listen(port, "0.0.0.0", () => {
  console.log(`Copilot service is running on port ${port}`);
});

module.exports = app;
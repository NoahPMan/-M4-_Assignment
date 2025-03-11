// Import the Express application and type definition
import express, { Express } from "express";
import morgan from "morgan";

// Import setupSwagger endpoint and route handlers
import setupSwagger from "../config/swagger";
import loanRoutes from "./api/v1/routes/loanRoutes";
import userRoutes from "./api/v1/routes/userRoutes";
import adminRoutes from "./api/v1/routes/adminRoutes";
import errorHandler from "./api/v1/middleware/errorHandler";

// Initialize the Express application
const app: Express = express();

// Setup Swagger for API documentation
setupSwagger(app);

// Middleware setup
app.use(morgan("combined"));
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Example "tasks" endpoint
/**
 * @openapi
 * /tasks:
 *  get:
 *   summary: Retrieve a list of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A list of tasks
 */
app.get("/tasks", (req, res) => {
    res.send("Retrieve tasks");
});

// Health check endpoint
/**
 * @openapi
 * /api/v1/health:
 *  get:
 *   summary: Get health status of the application
 *   tags: [Health]
 *   responses:
 *    200:
 *     description: The application's status, uptime, the current timestamp, and version
 */
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

// API routes
app.use("/api/v1/", loanRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/admin", adminRoutes);

// Global error handler
app.use(errorHandler);

// Export app for testing
export default app;

jest.mock("../src/api/v1/routes/loanRoutes", () => {
    // Create a mock router with mock route handlers
    const mockRouter = {
        get: jest.fn().mockReturnThis(),
        post: jest.fn().mockReturnThis(),
        put: jest.fn().mockReturnThis(),
        delete: jest.fn().mockReturnThis(),
    };

    // Mock the express.Router() creation
    const router = () => mockRouter;
    router.get = mockRouter.get;
    router.post = mockRouter.post;
    router.put = mockRouter.put;
    router.delete = mockRouter.delete;

    return {
        __esModule: true,
        default: router,
    };
});

import request from "supertest";
// import supertest request object

import { Response } from "supertest";
// import supertest Response type

import app from "../src/app";
// import express application and server

describe("GET /", () => {
    it("should return Hello, world!", async () => {
        // create GET request to root endpoint
        const response: Response = await request(app).get("/");

        // assert that response status is OK, response text is "Hello, world!"
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello, World!");
    });
});

describe("GET /api/v1/health", () => {
    it("should return server health status", async () => {
        const response: Response = await request(app).get("/api/v1/health");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");
    });
});
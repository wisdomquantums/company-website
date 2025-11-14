import axios from "axios";

/**
 * API Configuration — WisdomQuantum Solution Pvt. Ltd.
 * 
 * - Base URL: /api/v1
 * - Timeout: 10 seconds
 * - Authorization: Automatically adds Bearer token (if available)
 * - Global error handling ready for expansion
 */

const api = axios.create({
    baseURL: "/api/v1", // All requests go through this base path
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Automatically attach token if stored in localStorage
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// Optional global error handler
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { status } = error.response;
            // Example global handling logic:
            if (status === 401) {
                console.warn("Unauthorized access — token may be invalid or expired.");
            } else if (status === 500) {
                console.error("Server error encountered.");
            }
        }
        return Promise.reject(error);
    }
);

export default api;

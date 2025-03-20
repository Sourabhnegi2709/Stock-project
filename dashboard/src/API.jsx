import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3001", // Backend URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Attach JWT token to requests
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = token;
    }
    return req;
});

export default API;

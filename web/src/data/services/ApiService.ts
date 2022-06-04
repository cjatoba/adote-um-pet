import axios from "axios";

export const ApiService = axios.create({
    baseURL: "http://localhost:8180/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});
import axios from "axios";
import router from "./router";

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});

axiosClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            router.push({ name: "Login" });
        }
        return Promise.reject(error);
    }
);

import axios from "axios";

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Content-Type': 'application/json',
    },
});


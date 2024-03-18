import axios from "axios";

import { USER_LOCAL_STORAGE_KEY } from "../consts/localStorage";

export const $api = axios.create({
    baseURL: "http://localhost:3500" 
});

$api.interceptors.request.use((config) => {
    
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || "";
    }
    
    return config;
});
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = //"http://localhost:8080/v1/api/";
"https://api-mobile-34lx.onrender.com/v1/api/";
const AxiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

AxiosClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access_token');
    console.log("Token from AsyncStorage:", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    }, function (error) {
      return Promise.reject(error);
    });
    
AxiosClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if (error?.response?.data) return error?.response?.data;
    return Promise.reject(error);
});

export default AxiosClient;

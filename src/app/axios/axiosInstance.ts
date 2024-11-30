import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.response.use(
    response => response.data,
    error => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized Request.')
        }
        return Promise.reject(error.response?.data || 'An unknown error occurred.')
    }
)

export default axiosInstance;
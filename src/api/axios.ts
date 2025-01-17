import axios from 'axios';

console.log('Base URL:', import.meta.env.VITE_DE_ACADEME_API_BASE_URL);
console.log('Username:', import.meta.env.VITE_DE_ACADEME_API_USERNAME);
console.log('Password:', import.meta.env.VITE_DE_ACADEME_API_PASSWORD);

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_DE_ACADEME_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const getToken = async () => {
    const response = await axios.post(`${import.meta.env.VITE_DE_ACADEME_API_BASE_URL}/api/token/`, {
        username: import.meta.env.VITE_DE_ACADEME_API_USERNAME,
        password: import.meta.env.VITE_DE_ACADEME_API_PASSWORD
    });
    const { access, refresh, expires_in } = response.data;
    const expirationTime = new Date().getTime() + expires_in * 1000;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    localStorage.setItem('token_expiration', expirationTime.toString());
    return access;
};

const isTokenExpired = () => {
    const expirationTime = localStorage.getItem('token_expiration');
    if (!expirationTime) return true;
    return new Date().getTime() > parseInt(expirationTime);
};

axiosInstance.interceptors.request.use(async config => {
    let token = localStorage.getItem('access_token');
    if (!token || isTokenExpired()) {
        token = await getToken();
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    return response;
}, async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const token = await getToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
});

export default axiosInstance;
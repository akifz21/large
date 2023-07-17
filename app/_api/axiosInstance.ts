import axios from 'axios';


const baseURL = "http://localhost:4000/api";

const instance = axios.create({
    baseURL,
});

instance.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json'
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    //console.log(config)
    return config;
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 401) {
            //   toast.error('Your session has expired. Please login again.');

            localStorage.removeItem('token');
            window.location.href = '/login';
        }

        try {
            //  toast.error(error.response.data.message);
        } catch (e) {
            // toast.error('Something went wrong. Please try again.');
        }
        return error;
    }
);

const fetcher = (url: any) => instance.get(url).then((res) => res.data);

export { instance, fetcher };
import axios from "axios";
import { toast } from "react-hot-toast";

export const baseURL = "http://localhost:4000/api";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      toast.error("Oturumunuz sona erdi. Lütfen tekrar giriş yapın.");
      // localStorage.removeItem("token");
      // window.location.href = "/login";
    }
    try {
      toast.error(error?.response?.data?.message);
    } catch (e) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
    return error;
  }
);

const fetcher = (url: any) => instance.get(url).then((res) => res.data);

export { instance, fetcher };

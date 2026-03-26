import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
})
const useAxiosSec = () => {
  const { user } = useAuth();
  axiosSecure.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `bearer ${user?.accessToken}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return axiosSecure;
};

export default useAxiosSec;

import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://172.16.200.81:8010/api",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://new.journeyman-services.com/api",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

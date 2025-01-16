import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://coby.softvencefsd.xyz/api",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

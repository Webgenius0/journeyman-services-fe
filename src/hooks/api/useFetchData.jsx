import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchData = (path) => {
  const axiosPublic = useAxiosPublic();

  //   function to fetch data
  const fetchData = async () => {
    const response = await axiosPublic.get(path);
    return response.data;
  };

  //   tanstack
  const { data, error, isLoading, isError } = useQuery({
    queryKey: [path],
    queryFn: fetchData,
  });

  return { data, error, isLoading, isError };
};

export default useFetchData;

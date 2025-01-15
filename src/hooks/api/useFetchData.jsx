import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchData = (path) => {
  const axiosPublic = useAxiosPublic();

  const fetchData = async () => {
    const response = await axiosPublic.get(path);
    return response.data;
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: [path], // Query key as an array
    queryFn: fetchData, // Query function
    retry: 2, // Optional: Number of retries on failure
    staleTime: 30000, // Optional: Cache stale time
  });

  return { data, error, isLoading, isError };
};

export default useFetchData;

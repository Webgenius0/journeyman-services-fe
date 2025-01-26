import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./api/useAxiosPublic";

const useOtherPrices = () => {
  const axiosPublic = useAxiosPublic();

  const fetchData = async () => {
    const response = await axiosPublic.get("/logic/get");
    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["otherPrices"],
    queryFn: fetchData,
  });

  return { data, isLoading };
};

export default useOtherPrices;

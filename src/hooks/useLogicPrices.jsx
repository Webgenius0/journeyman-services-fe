import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./api/useAxiosPublic";

const useLogicPrices = () => {
  const axiosPublic = useAxiosPublic();

  const fetchData = async () => {
    const response = await axiosPublic.get("/logic/get");
    return response.data;
  };

  const { data: priceLogics, isLoading } = useQuery({
    queryKey: ["otherPrices"],
    queryFn: fetchData,
  });

  return { priceLogics, isLoading };
};

export default useLogicPrices;

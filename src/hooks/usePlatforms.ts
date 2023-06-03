import { useQuery } from "@tanstack/react-query";
import { Platform } from "../constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
  });

export default usePlatforms;

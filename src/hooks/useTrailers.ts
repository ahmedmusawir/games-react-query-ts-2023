import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../constants";
import APIClient from "../services/apiClient";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>("/games/" + gameId + "/movies");

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;

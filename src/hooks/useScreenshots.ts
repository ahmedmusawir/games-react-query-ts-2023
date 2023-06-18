import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../constants";
import APIClient from "../services/apiClient";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(
    "/games/" + gameId + "/screenshots"
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;

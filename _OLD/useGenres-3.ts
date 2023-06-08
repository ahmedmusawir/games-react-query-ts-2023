import { useQuery } from "@tanstack/react-query";
import { Genre } from "../constants";
import genres from "../data/genres";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;

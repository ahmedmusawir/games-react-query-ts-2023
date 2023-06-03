import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Genre } from "../constants";
import genres from "../data/genres";
import apiClient from "../services/apiClient";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    // initialData: { count: genres.length, results: genres },
  });

export default useGenres;

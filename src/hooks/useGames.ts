import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Game, GameQuery } from "../constants";
import apiClient from "../services/apiClient";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parents_platforms: gameQuery.platform?.id,
            ordering: gameQuery.order,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;

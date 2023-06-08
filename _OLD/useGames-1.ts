import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Game, GameQuery } from "../src/constants";
import apiClient from "../src/services/apiClient";
import useData from "../src/hooks/useData";

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.order,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;

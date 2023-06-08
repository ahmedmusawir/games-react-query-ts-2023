import { useQuery } from "@tanstack/react-query";
import { Game, GameQuery } from "../constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.order,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;

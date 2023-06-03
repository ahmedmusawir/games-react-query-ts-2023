import { Game, GameQuery } from "../constants";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.order,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;

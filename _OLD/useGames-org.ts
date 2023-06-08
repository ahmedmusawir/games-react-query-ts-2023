import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { Game } from "../constants";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;

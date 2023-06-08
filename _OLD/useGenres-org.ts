import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { Genre } from "../constants";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
}

export default useGenres;

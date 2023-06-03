import genres from "../data/genres";

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;

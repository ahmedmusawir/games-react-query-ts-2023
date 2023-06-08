import { Genre } from "../constants";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;

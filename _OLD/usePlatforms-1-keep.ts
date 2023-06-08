import { Platform } from "../constants";
import useData from "./useData";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;

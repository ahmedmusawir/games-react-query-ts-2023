import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "24c4c59986e04cc09adb7271a3a8209c",
  },
});

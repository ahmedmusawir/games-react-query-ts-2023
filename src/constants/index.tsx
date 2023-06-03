import { AiOutlineStar } from "react-icons/ai";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
  rating_top: number;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string | null;
  searchText: string | null;
}

export const meh = (
  <>
    <AiOutlineStar />
    <AiOutlineStar />
    <AiOutlineStar />
  </>
);

export const recommended = (
  <>
    <AiOutlineStar />
    <AiOutlineStar />
    <AiOutlineStar />
    <AiOutlineStar />
  </>
);
export const exceptional = (
  <>
    <AiOutlineStar />
    <AiOutlineStar />
    <AiOutlineStar />
    <AiOutlineStar />
    <AiOutlineStar />
  </>
);

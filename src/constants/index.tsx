import { AiOutlineStar } from "react-icons/ai";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

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
  genreId?: number;
  platformId?: number;
  order?: string | null;
  searchText?: string | null;
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

import type { APIResponse, MovieMapper } from '../types';
import { movieListToMovieMapperList } from '../mappers/movieMapper';

const APIKEY = import.meta.env.VITE_APIKEY;
const API_URL = `https://www.omdbapi.com/?apikey=${APIKEY}&s=`;

export const searchMoviesService = async (
  query: string
): Promise<MovieMapper[]> => {
  try {
    const response = await fetch(`${API_URL}${query}`);

    if (!response.ok) {
      throw new Error('Error fetching data from API');
    }

    const data: APIResponse = await response.json();

    if (data?.Search) {
      const movieMapperList: MovieMapper[] = movieListToMovieMapperList(
        data.Search
      );

      return movieMapperList;
    }
    return [];
  } catch (err) {
    throw new Error('An error occurred while fetching data');
  }
};

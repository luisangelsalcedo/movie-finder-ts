import type { Movie, MovieMapper } from '../types';

export const movieToMovieMapper = (movie: Movie): MovieMapper => ({
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
  type: movie.Type,
  image: movie.Poster,
});

export const movieListToMovieMapperList = (list: Movie[]): MovieMapper[] =>
  list.map(movie => movieToMovieMapper(movie));

import { useState } from 'react';
import type { MovieMapper } from '../types';
import { searchMoviesService } from '../services/movieService';

interface ReturnHook {
  movies: MovieMapper[];
  searchMovie: (query: string) => void;
}

export function useMovieFinder(): ReturnHook {
  const [movies, setMovies] = useState<MovieMapper[]>([]);

  const searchMovie = (query: string): void => {
    searchMoviesService(query)
      .then(data => {
        setMovies(data);
      })
      .catch(err => new Error(err));
  };
  return { movies, searchMovie };
}

// import apiResponse from './mocks/valid-response.json';
import { useState } from 'react';
import type { MovieMapper } from './types';
import { searchMoviesService } from './services/movieService';
import { MovieFinderForm, Movies } from './components';
import './MovieFinder.scss';

export function MovieFinder(): JSX.Element {
  const [movies, setMovies] = useState<MovieMapper[]>([]);

  const searchMovie = (query: string): void => {
    searchMoviesService(query)
      .then(data => {
        setMovies(data);
      })
      .catch(err => new Error(err));
  };

  return (
    <main className='movie-finder'>
      <MovieFinderForm searchMovie={searchMovie} />
      <Movies movies={movies} />
    </main>
  );
}

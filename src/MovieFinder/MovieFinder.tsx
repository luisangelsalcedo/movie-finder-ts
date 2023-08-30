import apiResponse from './mocks/valid-response.json';
import { useEffect, useState } from 'react';
import type { APIResponse, MovieMapper } from './types';
import { movieListToMovieMapperList } from './mappers/MovieMapper';
import './MovieFinder.scss';

export function MovieFinder(): JSX.Element {
  const [movies, setMovies] = useState<MovieMapper[]>([]);

  useEffect(() => {
    const movieResponse: APIResponse = apiResponse;
    if (movieResponse?.Search) {
      const moviesMapper: MovieMapper[] = movieListToMovieMapperList(
        movieResponse.Search
      );
      setMovies(moviesMapper);
    }
  }, []);

  return (
    <main className='movie-finder'>
      <section className='movie-finder__form'>
        <form>
          <input
            type='text'
            name='movieTitle'
            placeholder='Avengers, Momento, Spiderman...'
          />
          <button type='submit'>Search</button>
        </form>
      </section>
      <section className='movie-finder__response'>
        {movies.map(({ title, id }) => (
          <div key={id}>{title}</div>
        ))}
      </section>
    </main>
  );
}

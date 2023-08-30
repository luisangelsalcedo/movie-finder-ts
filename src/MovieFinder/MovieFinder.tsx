// import apiResponse from './mocks/valid-response.json';
import { useEffect, useState } from 'react';
import type { MovieMapper } from './types';
import { searchMoviesService } from './services/movieService';
import './MovieFinder.scss';

export function MovieFinder(): JSX.Element {
  const [movies, setMovies] = useState<MovieMapper[]>([]);
  const [query, setQuery] = useState('');

  const searchMovie = (query: string): void => {
    searchMoviesService(query)
      .then(data => {
        setMovies(data);
      })
      .catch(err => new Error(err));
  };

  useEffect(() => {
    searchMovie(query);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchMovie(query);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchMovie(query);
  };

  return (
    <main className='movie-finder'>
      <section className='movie-finder__form'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='movieTitle'
            placeholder='Avengers, Momento, Spiderman...'
            onChange={handleChange}
          />
          <button type='submit'>Search</button>
        </form>
      </section>
      <section className='movie-finder__response'>
        {movies.length
          ? movies.map(({ title, id, year }) => (
              <div key={id}>
                ({year}) {title}
              </div>
            ))
          : 'No hay resultados'}
      </section>
    </main>
  );
}

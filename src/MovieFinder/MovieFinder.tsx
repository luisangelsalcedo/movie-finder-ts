// import apiResponse from './mocks/valid-response.json';
import { useEffect, useState } from 'react';
import type { MovieMapper } from './types';
import { searchMoviesService } from './services/movieService';
import './MovieFinder.scss';

export function MovieFinder(): JSX.Element {
  const [movies, setMovies] = useState<MovieMapper[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    searchMoviesService('perros')
      .then(data => {
        setMovies(data);
      })
      .catch(err => new Error(err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('search:', query);
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
        {movies.map(({ title, id }) => (
          <div key={id}>{title}</div>
        ))}
      </section>
    </main>
  );
}

import { useEffect, useState } from 'react';

interface Props {
  searchMovie: (query: string) => void;
}

export function MovieFinderForm({ searchMovie }: Props): JSX.Element {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchMovie(query);
  };

  useEffect(() => {
    if (query.length < 3) return;

    const timer = setTimeout(() => {
      searchMovie(query);
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <section className='movie-finder__form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='movieTitle'
          placeholder='Avengers, Momento, Spiderman...'
          onChange={handleChange}
        />
        <button type='submit' disabled={query.length < 3}>
          Search
        </button>
      </form>
    </section>
  );
}

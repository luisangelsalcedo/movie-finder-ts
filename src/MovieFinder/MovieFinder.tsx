import { MovieFinderForm, Movies } from './components';
import { useMovieFinder } from './hooks';
import './MovieFinder.scss';

export function MovieFinder(): JSX.Element {
  const { movies, searchMovie } = useMovieFinder();

  return (
    <main className='movie-finder'>
      <MovieFinderForm searchMovie={searchMovie} />
      <Movies movies={movies} />
    </main>
  );
}

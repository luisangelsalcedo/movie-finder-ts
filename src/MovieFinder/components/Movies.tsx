import type { MovieMapper } from '../types';

interface Props {
  movies: MovieMapper[];
}

export function Movies({ movies }: Props): JSX.Element {
  return (
    <section className='movie-finder__response'>
      {movies.length
        ? movies.map(({ title, id, year }) => (
            <div key={id}>
              ({year}) {title}
            </div>
          ))
        : 'No hay resultados'}
    </section>
  );
}

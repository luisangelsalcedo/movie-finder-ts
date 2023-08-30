import './MovieFinder.scss';

export function MovieFinder(): JSX.Element {
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
      <section className='movie-finder__response'>Movie response</section>
    </main>
  );
}

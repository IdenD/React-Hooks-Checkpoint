import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
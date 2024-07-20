import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://image.url/inception.jpg', rating: 5 },
    { title: 'Interstellar', description: 'A journey through space', posterURL: 'https://image.url/interstellar.jpg', rating: 4 },
  ]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = () => {
    const title = prompt('Enter movie title:');
    const description = prompt('Enter movie description:');
    const posterURL = prompt('Enter movie poster URL:');
    const rating = prompt('Enter movie rating (1-5):');
    setMovies([...movies, { title, description, posterURL, rating: Number(rating) }]);
  };

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= filterRating
  );

  return (
    <div className="App container">
      <h1 className="my-4">Movie App</h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <button className="btn btn-primary mb-4" onClick={addMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

import React from 'react';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={posterURL} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Rating: {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;
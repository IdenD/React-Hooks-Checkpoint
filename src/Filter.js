import React from 'react';

function Filter({ setFilterTitle, setFilterRating }) {
  return (
    <div className="d-flex justify-content-around mb-4">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="1"
        max="5"
        onChange={(e) => setFilterRating(e.target.value)}
      />
    </div>
  );
}

export default Filter;
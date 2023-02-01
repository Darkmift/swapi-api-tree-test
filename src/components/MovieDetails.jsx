import React from 'react';
import Tree from './Tree';

function MovieDetails({ selectedMovie }) {
  if (!selectedMovie?.title) return <div>Select movie from list</div>;

  return (
    <div style={{ width: '40vmin', padding: '1vmin' }}>
      <div>Title: {selectedMovie.title}</div>
      <Tree treeData={selectedMovie} />
    </div>
  );
}

export default MovieDetails;

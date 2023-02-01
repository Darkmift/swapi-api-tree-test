import React, { useState, useEffect } from 'react';
import './App.css';

import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

const moviesUrl = 'https://swapi.dev/api/films';
const fetchMovies = () => fetch(moviesUrl).then((res) => res.json());

function App({ useQuery }) {
  const [selectedMovie, setSelectedMovie] = useState({});

  const {
    isLoading,
    error,
    data: moviesListData,
  } = useQuery({
    queryKey: ['movieList'],
    queryFn: fetchMovies,
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="app">
      <h2>Swappi api</h2>
      <div className="layout" style={{ display: 'flex', gap: '2vmin' }}>
        {moviesListData?.results?.length && (
          <MoviesList
            selectedMovie={selectedMovie}
            moviesListData={moviesListData.results}
            setSelectedMovie={setSelectedMovie}
          />
        )}
        <MovieDetails selectedMovie={selectedMovie} />
      </div>
    </div>
  );
}

export default App;

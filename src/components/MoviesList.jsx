import React from 'react';
import styled from 'styled-components';

const MovieButton = styled.button`
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    &:hover {
      border-color: #646cff;
    }
    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    &.selected {
      background-color: #2d2c2c;
    }
  }
`;

function MoviesList({ selectedMovie, moviesListData, setSelectedMovie }) {
  const selectedClassCondition = (episode_id) => selectedMovie.episode_id === episode_id;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        padding: '1vmin',
        width: '15vmin',
      }}
    >
      {moviesListData.map((movie) => (
        <MovieButton
          className={selectedClassCondition(movie.episode_id) ? 'selected' : ''}
          key={movie.episode_id}
          onClick={() =>
            setSelectedMovie(moviesListData.find((m) => m.episode_id === movie.episode_id))
          }
        >
          {movie.title}
        </MovieButton>
      ))}
    </div>
  );
}

export default MoviesList;

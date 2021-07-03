import React, { useContext } from 'react';
import { MovieContext } from '../context/GlobalState';

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(MovieContext);
  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            <i className='fa-fw far fa-eye'></i>
          </button>

          <button
            className='ctrl-btn btn-red'
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button className='ctrl-btn' onClick={() => moveToWatchlist(movie)}>
            <i className='fa-fw far fa-eye-slash'></i>
          </button>

          <button
            className='ctrl-btn btn-red'
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;

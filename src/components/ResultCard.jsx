import React, { useContext } from 'react';
import { MovieContext } from '../context/GlobalState';

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(MovieContext);

  let storedMovieWatchList = watchlist.find((x) => x.id === movie.id);
  let storedMovieWatched = watched.find((x) => x.id === movie.id);

  const watchlistDisabled = storedMovieWatchList
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className='filler-poster' />
        )}
      </div>

      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0, 4) : 'NA'}
          </h4>
        </div>

        <div className='controls'>
          <button
            className='btn'
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </button>

          <button
            className='btn'
            onClick={() => addMovieToWatched(movie)}
            disabled={watchedDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

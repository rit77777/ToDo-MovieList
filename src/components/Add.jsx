import React, { useState, useEffect } from 'react';

import ResultCard from './ResultCard';

const Add = () => {
  const [query, setQuery] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(query);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(query);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  useEffect(() => {
    const search = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${debouncedTerm}`
      );
      const data = await res.json();
      console.log(data);
      if (!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    };
    if (debouncedTerm !== '') {
      search();
    }

    if (debouncedTerm === '') {
      setResults([]);
    }
  }, [debouncedTerm]);

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search for a movie'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {results.length > 0 && (
            <ul className='results'>
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;

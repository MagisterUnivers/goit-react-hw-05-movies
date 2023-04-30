import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'services/theMoviesDbAPI';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
      .then(res => res.data.results)
      .then(setMovies);
    console.log(movies);
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.id}>
            <Link to={`users/${movie.id}`}>
              {/* <Link to={String(user.id)}> */}
              {movie.title
                ? `${index + 1}. ${movie.title}`
                : `${index + 1}. ${movie.name}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/theMoviesDbAPI';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => {
      const movies = res.data.results;
      setMovies(movies);
    });
  }, []); // esling-ignore-line

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
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

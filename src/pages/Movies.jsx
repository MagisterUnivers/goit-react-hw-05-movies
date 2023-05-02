import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/theMoviesDbAPI';

const Movies = () => {
  // const [users, setUsers] = useState([])
  // useEffect(() => {
  // 	axios
  // 		.get('https://dummyjson.com/users')
  // 		.then(({ data }) => setUsers(data.users))
  // }, [])

  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
            <Link to={`${movie.id}`} state={{ from: location }}>
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

export default Movies;

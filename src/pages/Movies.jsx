import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'services/theMoviesDbAPI';

const Movies = () => {
  // const [users, setUsers] = useState([])
  // useEffect(() => {
  // 	axios
  // 		.get('https://dummyjson.com/users')
  // 		.then(({ data }) => setUsers(data.users))
  // }, [])

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
            <Link to={`${movie.id}`}>
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

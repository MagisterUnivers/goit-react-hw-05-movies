import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'services/theMoviesDbAPI';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  const { id } = useParams();
  const [searchField, setSearchField] = useState('');
  const [fetchCompleted, setFetchCompleted] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  const handleSubmit = e => {
    e.preventDefault();
    const { search } = e.target.elements;
    setSearchField(search.value);
    // console.log(searchField);
    handleSearchFinder(search.value);
  };

  const handleSearchFinder = word => {
    axios
      .get(
        `
${BASE_URL}search/movie?query=${word}&api_key=${API_KEY}`
      )
      .then(response => {
        const movie = response.data.results;
        setMovies(movie);
        setFetchCompleted(true);
        console.log(movie);
      });
  };

  return (
    <>
      <div>
        <h1>HELLO. I am here to help you find things</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Search:
            <input type="text" name="search" />
          </label>
          {/* <button type="submit">Search</button> */}
        </form>
      </div>
      <div>
        <div>
          <ul>
            {movies.length !== 0 &&
              movies.map((movie, index) => (
                <li key={movie.id}>
                  {/* <Link to={location => ({ ...location, pathname: "/courses" })} /> */}
                  <Link to={`/movies/${movie.id}`}>
                    {/* <Link to={String(user.id)}> */}
                    {movie.title
                      ? `${index + 1}. ${movie.title}`
                      : `${index + 1}. ${movie.name}`}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Searchbar;

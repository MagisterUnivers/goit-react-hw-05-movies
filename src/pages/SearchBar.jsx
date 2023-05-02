import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchMovieByKeyword } from 'services/theMoviesDbAPI';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  const { state } = useLocation();
  const submittedSearchQuery = state?.searchQuery;

  const [searchQuery, setSearchQuery] = useState(submittedSearchQuery || '');

  useEffect(() => {
    if (submittedSearchQuery) {
      searchMovieByKeyword(submittedSearchQuery).then(response => {
        const movie = response.data.results;
        setMovies(movie);
      });
    }
  }, [submittedSearchQuery]);

  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery) {
      navigate('', { state: { searchQuery: searchQuery }, replace: false });
    } else {
      navigate('', { state: { searchQuery: null }, replace: true });
      setMovies([]);
    }
  };

  return (
    <>
      <div>
        <h1>HELLO</h1>
        <h2>I am here to help you find things</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span
              style={{
                fontSize: '20px',
                fontStyle: 'italic',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              Search:
            </span>
            <br></br>
            <input
              style={{
                width: '200px',
                marginTop: '10px',
                padding: '5px',
                border: '2px solid black',
              }}
              placeholder="Type a movie you want to find"
              type="text"
              name="search"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
              }}
            />
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

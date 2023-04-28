import { useEffect, useRef, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovieByKeyword } from 'services/theMoviesDbAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const searchBtnRef = useRef();
  const location = useLocation();
  useEffect(() => {
    if (!query) return;

    searchMovieByKeyword(query)
      .then(response => response.data.results)
      .then(setMovies);
    console.log(Boolean([]));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({ query: form.elements.search.value });
    form.reset();
    searchBtnRef.current.setAttribute('disabled', '');
  };
  const onInputChange = e => {
    const inputValue = e.target.value;
    if (inputValue.trim()) {
      searchBtnRef.current.removeAttribute('disabled');
    } else {
      searchBtnRef.current.setAttribute('disabled', '');
    }
  }; // disable search button if search field is empty or only spaces inputed
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="search" type="text" onChange={onInputChange} />
        <button type="submit" ref={searchBtnRef} disabled>
          Search
        </button>
      </form>
      {movies.length ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>We didn`t find anything 🙄. Try another.</p>
      )}
    </>
  );
};

export default MoviesPage;

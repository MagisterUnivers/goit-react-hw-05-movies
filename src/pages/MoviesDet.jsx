import { getMovieDetailsById } from 'services/theMoviesDbAPI';
import React, { useEffect, useState } from 'react';
import {
  Link,
  useNavigate,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
const MoviesDet = () => {
  const { id } = useParams();
  const [movieDetails, setMovies] = useState({});
  const location = useLocation();
  // const [fetchCompleted, setFetchCompleted] = useState(false);

  const navigate = useNavigate();

  console.log(location);

  useEffect(() => {
    getMovieDetailsById(id)
      .then(movieDetails => {
        setMovies(movieDetails);
        // setFetchCompleted(true);
        console.log(movieDetails);
      })
      .catch(error => {
        navigate('incorrect way');
        // setFetchCompleted(true);
        console.log(error);
      });
  }, [id, navigate]);

  return (
    <div>
      <button
        onClick={() =>
          navigate(location.state.from.pathname + location.state.from.search)
        }
      >
        Go Back
      </button>
      <div>
        <h1>You see a movie #{id}</h1>
        {Object.keys(movieDetails).length !== 0 && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movieDetails.backdrop_path}`}
              alt="movieImg"
            />
            <h1>{movieDetails.original_title}</h1>
            <h2>Rating:{movieDetails.vote_average}</h2>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            {movieDetails.genres.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </>
        )}

        <Link
          to={`cast`}
          state={{
            from: location.state.from,
          }}
        >
          CAST
        </Link>
        <br />
        <Link
          to={`reviews`}
          state={{
            from: location.state.from,
          }}
        >
          REVIEWS
        </Link>
        <Outlet fallback={<h1>Loading...</h1>} />
      </div>
    </div>
  );
};

export default MoviesDet;

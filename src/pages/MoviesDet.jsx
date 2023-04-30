import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'services/theMoviesDbAPI';

const MoviesDet = () => {
  const { id } = useParams();
  const [movieDetails, setMovies] = useState([]);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
      .then(response => {
        const movieDetails = response.data;
        setMovies(movieDetails);
        setFetchCompleted(true);
        console.log(movieDetails);
      })
      .catch(error => {
        setFetchCompleted(true);
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>You see a movie #{id}</h1>
      {fetchCompleted && (
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

      <Link to={`cast`}>CAST</Link>
      <br />
      <Link to={`reviews`}>REVIEWS</Link>
      <Outlet fallback={<h1>Loading...</h1>} />
    </div>
  );
};

export default MoviesDet;

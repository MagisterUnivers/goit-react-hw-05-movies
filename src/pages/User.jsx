import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import {
  API_KEY,
  BASE_URL,
  getMovieDetailsById,
} from 'services/theMoviesDbAPI';

const User = () => {
  const { id } = useParams();
  const [movieDetails, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(response => {
      const movieDetails = response.data;
      setMovies(movieDetails);
      console.log(movieDetails);
    });
  }, [id]);

  // const { firstName, lastName, age, image, phone, email } = user;
  return (
    <div>
      <h1>You see a movie #{id}</h1>
      <img src={movieDetails.backdrop_path} alt="movieImg" />
      <h1>{movieDetails.original_title}</h1>
      <h2>Rating:{movieDetails.vote_average}</h2>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      {movieDetails.genres.map(genre => (
        <p>{genre.name}</p>
      ))}

      <Link to={`posts`}>Побачити пости</Link>
      <br />
      <Link to={`adress`}>Побачити адресу юзера</Link>
      <Outlet fallback={<h1>Loading...</h1>} />
    </div>
  );
};

export default User;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/theMoviesDbAPI';
const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then(response => response.data.results)
      .then(setTrendingMovies);
  }, []);
  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HomePage;

import { CastCard } from 'components/CastCard/CastCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/theMoviesDbAPI';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getCastById(movieId)
      .then(response => response.data.cast)
      .then(setCast);
  }, [movieId]);

  return cast.length ? (
    <ul>
      {cast.map(actor => (
        <li key={actor.cast_id}>
          <CastCard
            photoPath={actor.profile_path}
            name={actor.name}
            character={actor.character}
            gender={actor.gender}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>Sorry, we don't have any information about cast for this movie</p>
  );
};

export default CastPage;

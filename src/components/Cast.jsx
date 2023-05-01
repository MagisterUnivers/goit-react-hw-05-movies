import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/theMoviesDbAPI';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState({ cast: [] });
  // const [fetchCompleted, setFetchCompleted] = useState(false);

  useEffect(() => {
    getCastById(id).then(res => {
      const cast = res.data;
      setCast(cast);
      console.log(cast);
    });
  }, [id]);

  return cast.cast.length !== 0 ? (
    <div>
      Cast
      <ul>
        {/* <h1>{cast.cast[1].name}</h1> */}
        {cast.cast.map(cast => (
          <li key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
                  : `https://i.stack.imgur.com/l60Hf.png`
              }
              alt="actorPic"
              width="200px"
              height="300px"
            />

            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h2>There are no Cast information</h2>
  );
};

export default Cast;

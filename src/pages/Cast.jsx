import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'services/theMoviesDbAPI';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  // const [fetchCompleted, setFetchCompleted] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`).then(res => {
      const cast = res.data;
      setCast(cast);
      // setFetchCompleted(true);
      console.log(cast);
    });
  }, [id]);

  return (
    cast.length !== 0 && (
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
    )
  );
};

export default Cast;

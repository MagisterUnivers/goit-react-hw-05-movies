import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'services/theMoviesDbAPI';

const Adress = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`).then(res => {
      const reviews = res.data;
      setReviews(reviews);
      setFetchCompleted(true);
      console.log(reviews);
    });
  }, [id]);

  return (
    reviews.length !== 0 && (
      <ul>
        {reviews.results.map(feedback => (
          <li key={feedback.id}>
            <h2>{feedback.author}</h2>
            {feedback.content && <p>{feedback.content}</p>}
          </li>
        ))}
      </ul>
    )
  );
};

export default Adress;

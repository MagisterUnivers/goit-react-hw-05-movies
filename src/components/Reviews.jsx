import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/theMoviesDbAPI';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState({ results: [] });

  // const [fetchCompleted, setFetchCompleted] = useState(false);

  useEffect(() => {
    getReviewsById(id).then(res => {
      const reviews = res.data;
      setReviews(reviews);
      // setFetchCompleted(true);
      console.log(reviews);
    });
  }, [id]);

  return reviews.results.length !== 0 ? (
    <ul>
      {reviews.results.map(feedback => (
        <li key={feedback.id}>
          <h2>{feedback.author}</h2>
          {feedback.content && <p>{feedback.content}</p>}
        </li>
      ))}
    </ul>
  ) : (
    <h2>There are no Reviews</h2>
  );
};

export default Reviews;

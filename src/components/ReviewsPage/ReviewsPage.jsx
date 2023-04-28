import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/theMoviesDbAPI';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviewsById(movieId)
      .then(response => response.data.results)
      .then(setReviews);
  }, [movieId]);
  return reviews.length ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <ReviewCard author={review.author} review={review.content} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Sorry, we don't have any reviews for this movie</p>
  );
};
export default ReviewsPage;

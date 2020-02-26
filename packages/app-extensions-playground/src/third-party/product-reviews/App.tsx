import React, {useState} from 'react';
import {ReviewList} from './pages';

enum Page {
  NoReviews = 'no-reviews',
  Review = 'review',
  ReviewList = 'review-list',
}

export default function App() {
  const [, setPage] = useState<Page>();
  const [, setReviewId] = useState();

  const onReviewSelect = (id: string) => {
    setPage(Page.Review);
    setReviewId(id);
  };

  return <ReviewList reviews={[]} onReviewSelect={onReviewSelect} />;
}

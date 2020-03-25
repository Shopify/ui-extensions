import {Payload, Stat} from '../types';

export default function useBuildStats(data: Payload): Stat[] {
  const {
    averageReviewRating,
    publishedReviewsCount,
    pendingReviewsCount,
    flaggedReviewsCount,
  } = data;

  return [
    {
      title: 'Rating',
      value: averageReviewRating,
    },
    {
      title: 'Published',
      value: publishedReviewsCount,
    },
    {
      title: 'Unpublished',
      value: pendingReviewsCount,
    },
    {
      title: 'Flagged',
      value: flaggedReviewsCount,
    },
  ];
}

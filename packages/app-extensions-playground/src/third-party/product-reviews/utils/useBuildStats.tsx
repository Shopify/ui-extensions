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
      value: averageReviewRating || 0,
    },
    {
      title: 'Published',
      value: publishedReviewsCount || 0,
    },
    {
      title: 'Unpublished',
      value: pendingReviewsCount || 0,
    },
    {
      title: 'Flagged',
      value: flaggedReviewsCount || 0,
    },
  ];
}

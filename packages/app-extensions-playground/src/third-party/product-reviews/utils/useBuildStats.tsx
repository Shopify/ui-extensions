import React from 'react';
import {Payload, Stat} from '../types';
import {Icon} from '@shopify/app-extensions-polaris-components/client';

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
      icon: <Icon source="starFilled" color="yellow" />,
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

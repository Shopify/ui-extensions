import React from 'react';
import StatBlock from '../components/Stats';

interface Props {
  onReviewSelect: (id: string) => void;
  reviews: any[];
}

const tempStats = [
  {
    title: 'Published',
    value: 0,
  },
  {
    title: 'Unpublished',
    value: 0,
  },
  {
    title: 'Flagged',
    value: 0,
  },
];

export default function ReviewList({}: Props) {
  return (
    <>
      <StatBlock statistics={tempStats} />
    </>
  );
}

import React from 'react';
import StatBlock from '../components/Stats';

import {Page} from '@shopify/app-extensions-polaris-components/client';

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
    <Page
      title="Nest camera"
      thumbnail={{
        source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
        alt: 'Black leather pet collar',
      }}
    >
      <StatBlock statistics={tempStats} />
    </Page>
  );
}

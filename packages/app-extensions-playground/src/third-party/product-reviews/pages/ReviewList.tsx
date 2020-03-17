import React from 'react';
import StatBlock from '../components/Stats';
import ReviewListItem, {Rating} from '../components/ReviewListItem';

import {
  Button,
  Card,
  CardSection,
  Page,
  Stack,
  StackItem,
  TextField,
  IconProps,
} from '@shopify/app-extensions-polaris-components/client';

interface Props {
  onReviewSelect: (id: string) => void;
  reviews: any[];
}

const tempStats = [
  {
    title: 'Rating',
    value: 3.5,
  },
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

const tempReviewData = [
  {
    email: 'random@email.com',
    rating: 3,
    title: 'Sweet board',
    name: 'Tote Ally Raad',
    body: 'Super dope board yo',
    status: 'pending',
    created: 'April 20th, 2019',
  },
  {
    email: 'big@air.com',
    rating: 4,
    title: 'Shred-tatistic board',
    name: 'Sowsi Kyo',
    body: 'Never seen a board like this before',
    status: 'published',
    created: 'May 15th, 2017',
  },
  {
    email: 'rad@nesss.com',
    rating: 5,
    title: 'Pristine board',
    name: 'Nar Lee',
    body: 'Totally radical board dude',
    status: 'published',
    created: 'September 18th, 2016',
  },
];

const sortIcon: IconProps = {
  source: 'searchMinor',
};

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
      <Card>
        <CardSection>
          <Stack>
            <StackItem fill>
              <TextField type="search" placeholder="Search for reviews" />
            </StackItem>
            <Button title="Sort" icon={sortIcon} />
          </Stack>
        </CardSection>
        {tempReviewData.map(review => (
          <ReviewListItem
            title={review.title}
            body={review.body}
            rating={review.rating as Rating}
            status={review.status}
            author={review.name}
            created={review.created}
          />
        ))}
      </Card>
    </Page>
  );
}

import {
  Button,
  Card,
  CardSection,
  IconProps,
  Page,
  Stack,
  StackItem,
  TextField,
} from '@shopify/app-extensions-polaris-components/client';
import React from 'react';

import ReviewListItem, {Props as ReviewListItemProps} from '../components/ReviewListItem';
import StatBlock from '../components/Stats';

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

const tempReviewData: ReviewListItemProps[] = [
  {
    rating: 3,
    title: 'Sweet board',
    author: 'Tote Ally Raad',
    body: 'Super dope board yo',
    status: 'pending',
    created: 'April 20th, 2019',
  },
  {
    rating: 4,
    title: 'Shred-tatistic board',
    author: 'Sowsi Kyo',
    body: 'Never seen a board like this before',
    status: 'published',
    created: 'May 15th, 2017',
  },
  {
    rating: 5,
    title: 'Pristine board',
    author: 'Nar Lee',
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
          <ReviewListItem {...review} />
        ))}
      </Card>
    </Page>
  );
}

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
import React, {useState, useEffect} from 'react';

import {Payload, Stat} from '../types';

import ReviewListItem, {Props as ReviewListItemProps} from '../components/ReviewListItem';
import StatBlock from '../components/Stats';
import useBuildStats from '../utils/useBuildStats';

interface Props {
  onReviewSelect: (id: string) => void;
  reviews: any[];
}

const sortIcon: IconProps = {
  source: 'searchMinor',
};

const TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wIjoic2hvcDEubXlzaG9waWZ5LmlvIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.DPRpE9-UGNOFtgJV72KfqCfSIde0WW-0snwErCK3mHg';

const BACKEND_API_ENDPOINT = 'https://product-reviews.myshopify.io/graphql';

const query = `
query {
  product(id: 1234) {
    id
    remoteId
    shopId
    title
    imageUrl
    averageReviewRating
    flaggedReviewsCount
    publishedReviewsCount
    pendingReviewsCount
    reviewsCount
    reviews {
      id
      productId
      rating
      shopId
      title
      body
      author
      state
      createdAt
    }
  }
}
`;

export default function ReviewList({}: Props) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState<Payload>({});

  useEffect(() => {
    const headers = new Headers({
      authorization: TOKEN,
      'Content-Type': 'application/json',
    });

    fetch(BACKEND_API_ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify({query}),
    })
      .then(response => response.json())
      .then(response => {
        // TODO: Error checking
        setData(response.data.product);
        setDataLoaded(true);
      });
  }, []);

  if (!dataLoaded)
    return (
      <Card>
        <CardSection>
          <Stack>Loading Data</Stack>
        </CardSection>
      </Card>
    );

  const stats: Stat[] = useBuildStats(data);
  console.log(data);

  return (
    <Page
      title="Nest camera"
      thumbnail={{
        source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
        alt: 'Black leather pet collar',
      }}
    >
      <StatBlock statistics={stats} />
      <Card>
        <CardSection key="search">
          <Stack>
            <StackItem fill>
              <TextField type="search" placeholder="Search for reviews" />
            </StackItem>
            <Button title="Sort" icon={sortIcon} />
          </Stack>
        </CardSection>
        {(data.reviews || []).map(review => (
          <ReviewListItem data={review} />
        ))}
      </Card>
    </Page>
  );
}

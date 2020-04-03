import React from 'react';
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

import ReviewListItem from '../components/ReviewListItem';
import StatBlock from '../components/Stats';
import useBuildStats from '../utils/useBuildStats';

import ProductWithReviewsQuery from '../graphql/ProductWithReviews';

interface Props {
  onReviewSelect: (id: string) => void;
  reviews: any[];
}

const sortIcon: IconProps = {
  source: 'searchMinor',
};

export default function ReviewList({}: Props) {
  const {data, loading, error} = useQuery(ProductWithReviewsQuery, {
    variables: {
      id: 1234,
    },
  });

  if (loading)
    return (
      <Page title="">
        <Card>
          <CardSection>
            <Stack>Loading Data</Stack>
          </CardSection>
        </Card>
      </Page>
    );

  if (error) {
    //do spmething here
    console.warn('Graphql error - ', error);
  }

  const {product} = data;
  const stats: Stat[] = useBuildStats(product);

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
        {(product.reviews || []).map(review => (
          <ReviewListItem data={review} />
        ))}
      </Card>
    </Page>
  );
}

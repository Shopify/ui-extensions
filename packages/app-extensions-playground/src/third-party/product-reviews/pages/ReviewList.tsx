import React from 'react';
import StatBlock from '../components/Stats';

import {
  Badge,
  Button,
  Card,
  Checkbox,
  CardSection,
  Page,
  Text,
  Stack,
  StackItem,
  TextField,
  IconProps,
  Icon,
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
        <CardSection>
          <Stack alignment="center">
            <Checkbox />
            <Stack spacing="none">
              <Icon source="starFilled" color="yellow" />
              <Icon source="starFilled" color="yellow" />
              <Icon source="starFilled" color="yellow" />
              <Icon source="starHollow" color="yellow" />
              <Icon source="starHollow" color="yellow" />
            </Stack>
            <StackItem fill>
              <Stack vertical spacing="none">
                <Text style="strong">Good camera for an unnecessary cost</Text>
                <Text>Really good camera with solid quality and something I dont know</Text>
                <Text color="secondary">Jim Anderson</Text>
              </Stack>
            </StackItem>
            <Text>Oct 15, 2020</Text>
            <Badge message="Unpublished" status="warning" />
          </Stack>
        </CardSection>
        <CardSection>
          <Stack alignment="center">
            <Checkbox />
            <Stack spacing="none">
              <Icon source="starFilled" color="yellow" />
              <Icon source="starFilled" color="yellow" />
              <Icon source="starFilled" color="yellow" />
              <Icon source="starHollow" color="yellow" />
              <Icon source="starHollow" color="yellow" />
            </Stack>
            <StackItem fill>
              <Stack vertical spacing="none">
                <Text style="strong">Good camera for an unnecessary cost</Text>
                <Text>Really good camera with solid quality and something I dont know</Text>
                <Text color="secondary">Jim Anderson</Text>
              </Stack>
            </StackItem>
            <Text>Oct 15, 2020</Text>
            <Badge message="Unpublished" status="warning" />
          </Stack>
        </CardSection>
      </Card>
    </Page>
  );
}

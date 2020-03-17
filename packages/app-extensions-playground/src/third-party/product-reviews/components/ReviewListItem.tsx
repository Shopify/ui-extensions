import React, {useState} from 'react';
import {
  CardSection,
  Stack,
  Text,
  Checkbox,
  StackItem,
  Icon,
  Badge,
} from '@shopify/app-extensions-polaris-components/client';

export enum ReviewStatus {
  'pending',
  'published',
  'spam',
}

export type Rating = 1 | 2 | 3 | 4 | 5;

interface Props {
  title: string;
  body: string;
  rating: Rating;
  status: ReviewStatus;
  author: string;
  created: string;
}

export default function ReviewListItem({title, body, rating, status, author, created}: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <CardSection>
      <Stack alignment="center">
        <Checkbox label="" onChange={() => setSelected(!selected)} checked={selected} />
        <Rating rating={rating} />
        <StackItem fill>
          <Stack vertical spacing="none">
            <Text style="strong">{title}</Text>
            <Text>{body}</Text>
            <Text color="secondary">{author}</Text>
          </Stack>
        </StackItem>
        <Text>{created}</Text>
        <StatusBadge reviewStatus={status} />
      </Stack>
    </CardSection>
  );
}

function Rating({rating}: {rating: Rating}) {
  const stars = Array.from(new Array(5), (v, i) => (
    <Icon
      key={`starFilled-${Math.floor(Math.random() * 100000)}`}
      source={i < rating ? 'starFilled' : 'starHollow'}
      color="yellow"
    />
  ));

  return <Stack spacing="none">{stars}</Stack>;
}

function StatusBadge({reviewStatus}: {reviewStatus: ReviewStatus}) {
  return <Badge message={reviewStatus} status="warning" />;
}

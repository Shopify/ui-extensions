import React, {useState} from 'react';
import {
  CardSection,
  Stack,
  Text,
  Checkbox,
  StackItem,
} from '@shopify/app-extensions-polaris-components/client';
import {Review, Rating} from '../types';
import {StarRating, StatusBadge} from './';

export interface Props {
  data: Review;
}

export default function ReviewListItem({data}: Props) {
  const {id, rating, title, body, author, state, createdAt} = data;
  const [selected, setSelected] = useState(false);

  return (
    <CardSection key={id}>
      <Stack alignment="center" wrap={false}>
        <Checkbox label="" onChange={() => setSelected(!selected)} checked={selected} />
        <StarRating rating={rating} />
        <StackItem fill>
          <Stack vertical spacing="none">
            <Text style="strong">{title}</Text>
            <Text>{body}</Text>
            <Text color="secondary">{author}</Text>
          </Stack>
        </StackItem>
        <Text>{createdAt}</Text>
        <StatusBadge reviewStatus={state} />
      </Stack>
    </CardSection>
  );
}

import React, {useCallback} from 'react';
import {
  CardSection,
  Stack,
  Text,
  StackItem,
} from '@shopify/app-extensions-polaris-components/client';
import {Review} from '../types';
import {StarRating, StatusBadge} from './';

export interface Props {
  data: Review;
}

export default function ReviewListItem({data}: Props) {
  const {id, rating, title, body, author, state, createdAt} = data;

  const parseDate = useCallback(() => {
    // Hacky
    const date = new Date(createdAt);
    const dateElements = date.toString().split(' ');
    return `${dateElements[0]} ${dateElements[1]} ${dateElements[2]} ${dateElements[3]}`;
  }, [createdAt]);

  return (
    <CardSection key={id}>
      <Stack alignment="center" wrap={false}>
        <StarRating rating={rating} />
        <StackItem fill>
          <Stack vertical spacing="none">
            <Text style="strong">{title}</Text>
            <Text>{body}</Text>
            <Text color="secondary">{author}</Text>
          </Stack>
        </StackItem>
        <Text>{parseDate()}</Text>
        <StatusBadge reviewStatus={state} />
      </Stack>
    </CardSection>
  );
}

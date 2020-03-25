import React from 'react';
import {Icon, Stack} from '@shopify/app-extensions-polaris-components/client';
import {Rating} from '../types';

export default function StarRating({rating}: {rating: Rating}) {
  const stars = Array.from(new Array(5), (v, i) => (
    <Icon
      key={`starFilled-${Math.floor(Math.random() * 100000)}`}
      source={i < rating ? 'starFilled' : 'starHollow'}
      color="yellow"
    />
  ));

  return <Stack spacing="none">{stars}</Stack>;
}

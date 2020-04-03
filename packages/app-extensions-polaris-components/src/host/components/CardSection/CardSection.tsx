import React from 'react';
import {Card} from '@shopify/polaris';

import {CardSectionProps} from '../../../client/core';

export default function CardSection(props: CardSectionProps) {
  return <Card.Section {...props} />;
}

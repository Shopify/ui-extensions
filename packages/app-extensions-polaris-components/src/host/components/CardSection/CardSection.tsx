import {Card} from '@shopify/polaris';
import React from 'react';

import {CardSectionProps} from '../../../client/core';

export default function CardSection(props: CardSectionProps) {
  return <Card.Section {...props} />;
}

import React from 'react';
import {CardSection as ArgoCardSection} from '@shopify/argo-admin';
import {ReactPropsFromRemoteComponentType} from '@shopify/argo-admin/utilities';
import {Card} from '@shopify/polaris';

type CardSectionProps = ReactPropsFromRemoteComponentType<typeof ArgoCardSection>;

export default function CardSection({title, children}: CardSectionProps) {
  return <Card.Section title={title}>{children}</Card.Section>;
}

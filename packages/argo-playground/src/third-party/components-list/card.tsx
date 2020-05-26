import React, {useState} from 'react';
import {Card, CardSection, Text} from '@shopify/argo-react/components';

export function CardExample() {
  const [cardPrimaryFooterValue, setCardPrimaryFooterValue] = useState('N/A');
  const [cardSecondaryFooterValue, setCardSecondaryFooterValue] = useState('N/A');

  return (
    <>
      <Card
        sectioned
        title="Card component"
        primaryFooterAction={{
          content: 'Primary Footer',
          onAction: () => {
            setCardPrimaryFooterValue(new Date().toISOString());
          },
        }}
        secondaryFooterActions={[
          {
            content: 'Secondary Footer',
            onAction: () => {
              setCardSecondaryFooterValue(new Date().toISOString());
            },
          },
        ]}
      >
        <Text>PrimaryFooterAction: {cardPrimaryFooterValue}</Text>
        <Text>SecondaryFooterAction: {cardSecondaryFooterValue}</Text>
      </Card>
      <Card title="CardSection component">
        <CardSection title="CardSection 1">
          <Text>Foo</Text>
        </CardSection>
        <CardSection title="CardSection 2">
          <Text>Bar</Text>
        </CardSection>
      </Card>
    </>
  );
}

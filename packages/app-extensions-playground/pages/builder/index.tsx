import React from 'react';
import UIBuilder from '@shopify/app-extensions-ui-builder';
import styled from 'styled-components';
import {ComponentDefinitions} from '@shopify/app-extensions-polaris-components/dist';

const Container = styled.div`
  border: 3px solid #6e00cf;
`;

export default function Builder() {
  const componentList = [
    ComponentDefinitions.Button,
    ComponentDefinitions.Textfield,
    ComponentDefinitions.Checkbox,
    ComponentDefinitions.Caption,
    ComponentDefinitions.Badge,
  ];

  return (
    <Container>
      <UIBuilder
        name="Example Extension"
        primaryAction={{
          label: 'Review',
        }}
        secondaryAction={{
          label: 'Save',
        }}
        componentList={componentList}
      />
    </Container>
  );
}

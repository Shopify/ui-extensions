import React from 'react';
import {Stack, Button, TextStyle, Icon} from '@shopify/polaris';
import styled from 'styled-components';
import {AppExtensionMinor} from '@shopify/polaris-icons';

type Props = {
  name: string;
};

const ItemWrapper = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  background: white;
  max-height: 48px;
  overflow: hidden;
`;

export default function ComponentItem({name}: Props) {
  return (
    <ItemWrapper>
      <Stack>
        <Stack.Item>
          <Icon source={AppExtensionMinor} color="skyDark" />
        </Stack.Item>
        <Stack.Item fill>
          <TextStyle>{name}</TextStyle>
        </Stack.Item>
        <Stack.Item>
          <Button plain>Add</Button>
        </Stack.Item>
      </Stack>
    </ItemWrapper>
  );
}

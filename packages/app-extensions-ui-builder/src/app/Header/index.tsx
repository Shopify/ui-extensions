import React from 'react';
import styled from 'styled-components';
import {ButtonGroup, Button, DisplayText, Icon, Stack} from '@shopify/polaris';
import {ArrowLeftMinor} from '@shopify/polaris-icons';

// Move props to shared types
export type HeaderProps = {
  name?: string;
  primaryAction: {
    label: string;
    action: (schema: any, tree: any) => void;
  };
  secondaryAction: {
    label: string;
    action: (schema: any, tree: any) => void;
  };
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  > div {
    width: 100%;
  }
`;

const BackWrapper = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 75px;
  height: 75px;
`;
const BackContent = styled.div`
  padding: 27px 0;
`;
const HeadingWrapper = styled.div`
  text-align: center;
`;

export default function Header({name}: HeaderProps) {
  return (
    <HeaderContainer>
      <Stack alignment="center">
        <Stack.Item>
          <BackWrapper>
            <BackContent>
              <Icon color="skyDark" source={ArrowLeftMinor} />
            </BackContent>
          </BackWrapper>
        </Stack.Item>
        <Stack.Item fill>
          <HeadingWrapper>
            <DisplayText size="medium">{name || 'New Extension'}</DisplayText>
          </HeadingWrapper>
        </Stack.Item>
        <Stack.Item>
          <ButtonGroup>
            <Button>Save</Button>
            <Button primary>Review</Button>
          </ButtonGroup>
        </Stack.Item>
      </Stack>
    </HeaderContainer>
  );
}

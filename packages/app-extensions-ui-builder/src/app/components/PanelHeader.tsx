import React from 'react';
import styled from 'styled-components';
import {Heading, Stack, Icon} from '@shopify/polaris';
import {IconSource} from '@shopify/polaris/types/components/Icon/Icon';

const PanelHeaderContainer = styled.div`
  height: 48px;
  max-height: 48px;
  background: white;
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const PanelHeaderText = styled.div`
  opacity: 1;
  transition: opacity 0.1s ease-out, width 0.1s ease-out;
  &.hidden {
    width: 0px;
    opacity: 0;
  }
`;

type Props = {
  icon?: IconSource;
  onActionClick: () => void;
  title: string;
};

export default function PanelHeader({onActionClick, icon, title}: Props) {
  return (
    <PanelHeaderContainer>
      <Stack>
        <Stack.Item fill>
          <PanelHeaderText>
            <Heading>{title}</Heading>
          </PanelHeaderText>
        </Stack.Item>
        <Stack.Item>
          {icon && (
            <div onClick={onActionClick}>
              <Icon source={icon} />
            </div>
          )}
        </Stack.Item>
      </Stack>
    </PanelHeaderContainer>
  );
}

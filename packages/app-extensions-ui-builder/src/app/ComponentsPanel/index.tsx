import React, {useState} from 'react';
import styled from 'styled-components';
import {Heading, Stack, Icon, Scrollable} from '@shopify/polaris';
import {ChevronLeftMinor, ChevronRightMinor} from '@shopify/polaris-icons';
import ComponentItem from './ComponentItem';
import {useStateValue} from '../../utils/StateProvider';

const ComponentsPanelWrapper = styled.div`
  max-width: 290px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 216px;
  height: 100%;
  overflow: hidden;
  transition: width 0.1s ease-out;

  &.collapsed {
    width: 50px;
  }
`;

const PanelHeader = styled.div`
  height: 48px;
  max-height: 48px;
  background: white;
  width: 100%;
  padding: 12px 16px;
`;

const PanelHeaderText = styled.div`
  opacity: 1;
  transition: opacity 0.1s ease-out, width 0.1s ease-out;
  &.hidden {
    width: 0px;
    opacity: 0;
  }
`;

const ComponentListWrapper = styled.div`
  padding-top: 12px;
`;

export default function Stage() {
  const [collasped, setCollapsed] = useState(false);

  // @ts-ignore
  const [{componentList}] = useStateValue();
  const onIconClick = () => {
    setCollapsed(!collasped);
  };

  const titleBar = (
    <PanelHeader>
      <Stack>
        <Stack.Item fill>
          <PanelHeaderText className={collasped ? 'hidden' : ''}>
            <Heading>Components</Heading>
          </PanelHeaderText>
        </Stack.Item>
        <Stack.Item>
          <div onClick={onIconClick}>
            <Icon source={collasped ? ChevronRightMinor : ChevronLeftMinor} />
          </div>
        </Stack.Item>
      </Stack>
    </PanelHeader>
  );

  const constructedList = componentList.map(item => (
    <ComponentItem name={item.componentType} icon={item.icon} />
  ));

  return (
    <ComponentsPanelWrapper className={collasped ? 'collapsed' : ''}>
      {titleBar}
      <ComponentListWrapper>
        <Scrollable>{constructedList}</Scrollable>
      </ComponentListWrapper>
    </ComponentsPanelWrapper>
  );
}

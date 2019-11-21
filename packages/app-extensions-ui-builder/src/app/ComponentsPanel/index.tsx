import React, {useState} from 'react';
import styled from 'styled-components';
import {Scrollable} from '@shopify/polaris';
import {ChevronLeftMinor, ChevronRightMinor} from '@shopify/polaris-icons';
import ComponentItem from './ComponentItem';
import {PanelHeader} from '../components';
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
    <PanelHeader
      title="Components"
      icon={collasped ? ChevronRightMinor : ChevronLeftMinor}
      onActionClick={onIconClick}
    />
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

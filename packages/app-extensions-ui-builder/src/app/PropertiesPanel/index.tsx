import React from 'react';
import {TextField, Button, Scrollable, FormLayout} from '@shopify/polaris';
import styled from 'styled-components';
import {PanelHeader} from '../components';

const PropertiesPanelWrapper = styled.div`
  max-width: 350px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 100%;
  overflow: hidden;
  transition: width 0.1s ease-out;

  &.collapsed {
    width: 50px;
  }
`;

export default function Stage() {
  return (
    <PropertiesPanelWrapper>
      <PanelHeader title="Properties" onActionClick={() => {}} />
      <Scrollable style={{padding: '16px', height: '100%'}}>
        <FormLayout>
          <TextField label="Prop 1" onChange={() => {}} />
          <TextField label="Prop 2" onChange={() => {}} />
          <Button onClick={() => {}}>Apply</Button>
        </FormLayout>
      </Scrollable>
    </PropertiesPanelWrapper>
  );
}

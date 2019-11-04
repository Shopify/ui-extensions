import React from 'react';
import styled from 'styled-components';

const ComponentsPanelWrapper = styled.div`
  max-width: 290px;
  background: white;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 216px;
  height: 100%;

  &.collapsed {
    width: 50px;
  }
`;

const PanelHeader = styled.div`
  height: 40px;
`;

export default function Stage() {
  return <ComponentsPanelWrapper></ComponentsPanelWrapper>;
}

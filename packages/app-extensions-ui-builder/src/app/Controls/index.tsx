import React from 'react';
import styled from 'styled-components';

const ControlsWrapper = styled.div`
  position: absolute;
  right: 500px;
`;

export default function Stage() {
  return <ControlsWrapper>Controls</ControlsWrapper>;
}

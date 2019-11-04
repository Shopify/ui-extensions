import React from 'react';
import {Card} from '@shopify/polaris';
import styled from 'styled-components';

const StageContainer = styled.div`
  padding: 20px;
`;

const ExtensionContainerWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const EmptyState = styled.div`
  min-height: 400px;
`;

export default function Stage() {
  const Continer = Card; // Add logic to read this value

  return (
    <StageContainer>
      <ExtensionContainerWrapper>
        <Continer title="Title">
          <EmptyState />
        </Continer>
      </ExtensionContainerWrapper>
    </StageContainer>
  );
}

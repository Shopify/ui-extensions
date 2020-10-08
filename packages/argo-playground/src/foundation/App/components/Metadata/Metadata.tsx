import * as React from 'react';
import {Title, Responsive, AppleHomeScreen} from '@shopify/react-html';

export default function Metadata() {
  return (
    <>
      <Title>Shopify App</Title>
      <Responsive coverNotch allowPinchToZoom />
      <AppleHomeScreen />
    </>
  );
}

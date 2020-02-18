import * as React from 'react';
import {Title, Favicon, Responsive, AppleHomeScreen} from '@shopify/react-html';

import favicon from './images/favicon.ico';

export default function Metadata() {
  return (
    <>
      <Title>Shopify App</Title>
      <Favicon source={favicon} />
      <Responsive coverNotch allowPinchToZoom />
      <AppleHomeScreen />
    </>
  );
}

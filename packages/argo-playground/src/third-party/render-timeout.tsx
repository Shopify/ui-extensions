import React from 'react';
import {Card} from '@shopify/argo';
import {render} from '@shopify/argo/react';

function App() {
  return <Card sectioned>You never see me</Card>;
}

render('intentional-to-force-timeout' as any, () => <App />);

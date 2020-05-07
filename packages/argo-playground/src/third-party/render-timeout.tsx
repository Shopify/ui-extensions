import React from 'react';
import {render} from '@shopify/argo-react';
import {Card} from '@shopify/argo-react/components';

function App() {
  return <Card sectioned>You never see me</Card>;
}

render('intentional-to-force-timeout' as any, () => <App />);

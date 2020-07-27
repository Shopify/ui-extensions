import React from 'react';
import {render, Card} from '@shopify/argo-admin-react';

function App() {
  return <Card sectioned>You never see me</Card>;
}

render('intentional-to-force-timeout' as any, () => <App />);

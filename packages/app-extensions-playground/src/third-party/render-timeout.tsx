import React from 'react';
import {render} from '@shopify/app-extensions-renderer';
import {Card} from '@shopify/app-extensions-polaris-components/client';

function App() {
  return <Card sectioned>You never see me</Card>;
}

render('intentional-to-force-timeout' as any, () => <App />);

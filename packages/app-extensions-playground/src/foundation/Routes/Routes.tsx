import * as React from 'react';
import {Switch, Route} from '@shopify/react-router';

import {Home, ComponentsList, ProductReviews} from '../../features';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/components-list" exact render={() => <ComponentsList />} />
      <Route path="/product-reviews" exact render={() => <ProductReviews />} />
    </Switch>
  );
}

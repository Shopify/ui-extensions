import * as React from 'react';
import {Switch, Route} from '@shopify/react-router';

import {Home} from '../../features';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
    </Switch>
  );
}

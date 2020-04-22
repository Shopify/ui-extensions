import * as React from 'react';
import {Switch, Route} from '@shopify/react-router';

import {Home, ComponentsList, InlineScript, Containers} from '../../features';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/components-list" exact render={() => <ComponentsList />} />
      <Route path="/inline-script" exact render={() => <InlineScript />} />
      <Route path="/containers" exact render={() => <Containers />} />
    </Switch>
  );
}

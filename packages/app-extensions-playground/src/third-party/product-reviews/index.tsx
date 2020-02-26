import React from 'react';

import {render} from '@shopify/remote-ui-react';
import {registerRender, RenderRoot} from '@shopify/app-extensions-renderer';

import App from './App';

registerRender(RenderRoot.Default, root => {
  render(<App />, root);
});

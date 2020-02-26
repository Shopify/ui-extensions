import React from 'react';

import {createRemoteComponent} from '@shopify/remote-ui-core';
import {render} from '@shopify/remote-ui-react';
import {registerRender, RenderRoot} from '@shopify/app-extensions-renderer';

registerRender(RenderRoot.Default, root => {
  render(<App />, root);
});

const Text = createRemoteComponent('Text');

function App() {
  return <Text>Hello world from 3p code</Text>;
}

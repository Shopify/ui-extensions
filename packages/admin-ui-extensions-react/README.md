# Admin UI Extensions React

Admin UI Extensions React is built on top of Admin UI Extensions. It allows a developer to write React-style scripts.

## Usage

With the React approach, adding a button looks like the following:

```js
import React from 'react';
import {extend, render, Button} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Button
      title="Press Me"
      primary
      onPress={() => console.log('Pressed')}
      disabled={false}
    />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
```

You can find more component usage examples alongside each component in [packages/admin-ui-extensions-react/src/components](/packages/admin-ui-extensions-react/src/components)

# Extension Point

You can introspect the current extension point via `api.extensionPoint`.

## Implementation

### Vanilla

```js
import {extend} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  console.log(api.extensionPoint); // => 'Admin::Product::SubscriptionPlan::Add'
});
```

### React

```jsx
import React, {useEffect} from 'react';
import {render, extend, useExtensionApi} from '@shopify/argo-admin-react';

function App() {
  const {extensionPoint} = useExtensionApi();

  useEffect(() => {
    console.log(extensionPoint); // => 'Admin::Product::SubscriptionPlan::Add'
  }, []);
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  react(() => <App />),
);
```

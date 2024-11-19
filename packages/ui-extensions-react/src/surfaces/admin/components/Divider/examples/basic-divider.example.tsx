import React from 'react';
import {
  render,
  Divider,
  Stack,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Stack direction="block" gap>
      <>First text</>
      <Divider />
      <>Second Text</>
    </Stack>
  );
}

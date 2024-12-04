import React from 'react';
import {
  reactExtension,
  Divider,
  Stack,
  reactExtension,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Stack direction="block" gap>
      <>First text</>
      <Divider />
      <>Second Text</>
    </Stack>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);

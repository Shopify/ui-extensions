import React from 'react';
import {
  reactExtension,
  Stack,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Stack gap>
      <>Child 1</>
      <>Child 2</>
      <>Child 3</>
      <>Child 4</>
    </Stack>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);

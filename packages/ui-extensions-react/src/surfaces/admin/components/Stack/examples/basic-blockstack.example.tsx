import React from 'react';
import {
  render,
  Stack,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

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

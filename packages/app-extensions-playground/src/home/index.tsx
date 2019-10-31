import React from 'react';
import {Card, Stack, Layout, Button} from '@shopify/polaris';

export default function Home() {
  return (
    <Layout>
      <Stack>
        <Card sectioned>
          <Button url="/repl">REPL</Button>
        </Card>
        <Card sectioned>
          <Button url="/builder">UI Builder</Button>
        </Card>
      </Stack>
    </Layout>
  );
}

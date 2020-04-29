import React from 'react';
import {Banner, Button, Card, Page, Stack, TextField} from '@shopify/argo-react/components';
import {ExtensionPoint} from '@shopify/argo';
import {render} from '@shopify/argo-react';
import {useField, useForm} from '@shopify/react-form';

function App() {
  const {fields, submit, reset, submitErrors} = useForm({
    fields: {
      title: useField('some default title'),
    },
    onSubmit: async _ => {
      return {status: 'fail', errors: [{message: 'bad form data'}]};
    },
  });

  const errors =
    submitErrors.length > 0 ? (
      <Banner
        status="critical"
        title={submitErrors.map(err => err.message).join(', ')}
        onDismiss={() => {}}
      />
    ) : null;

  return (
    <Page title="Use Form">
      <Card sectioned>
        <Stack vertical>
          {errors}
          <TextField
            label="Name"
            placeholder="Type your name"
            value={fields.title.value}
            onAfterChange={fields.title.onChange}
          />
          <Button title="Reset" onClick={reset} />
          <Button title="Submit" onClick={submit} />
        </Stack>
      </Card>
    </Page>
  );
}

render(ExtensionPoint.Playground, () => <App />);

import React from 'react';
import {
  render,
  Banner,
  Button,
  Card,
  ExtensionPoint,
  Select,
  Stack,
  TextField,
} from '@shopify/argo-admin-react';
import {notEmpty, useField, useForm} from '@shopify/react-form';

function App() {
  const {fields, submit, reset, submitErrors} = useForm({
    fields: {
      title: useField({value: 'some default title', validates: [notEmpty('Title is required')]}),
      color: useField({
        value: 'red',
        validates: (value) => (value === 'red' ? 'Cannot be Red' : undefined),
      }),
    },
    onSubmit: async (_) => {
      return {status: 'fail', errors: [{message: 'bad form data'}]};
    },
  });
  const colors = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
  ];

  const errors =
    submitErrors.length > 0 ? (
      <Banner
        status="critical"
        title={submitErrors.map((err) => err.message).join(', ')}
        onDismiss={() => {}}
      />
    ) : null;

  return (
    <Card title="Use Form" sectioned>
      <Stack vertical>
        {errors}
        <TextField
          label="Name"
          placeholder="Type your name"
          value={fields.title.value}
          onAfterChange={fields.title.onChange}
          onBlur={fields.title.onBlur}
          error={fields.title.error}
        />
        <Select
          labelInline
          label="Colors"
          options={colors}
          value={fields.color.value}
          onChange={fields.color.onChange}
          onBlur={fields.color.onBlur}
          error={fields.color.error}
        />
        <Button title="Reset" onClick={reset} />
        <Button title="Submit" onClick={submit} />
      </Stack>
    </Card>
  );
}

render(ExtensionPoint.Playground, () => <App />);

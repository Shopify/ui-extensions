import React, {useState, useCallback} from 'react';
import {Card, Stack, TextField, Text} from '@shopify/argo-admin-react';

export function TextFieldExample() {
  const [name, setName] = useState('');
  const clearName = useCallback(() => setName(''), []);
  const [search, setSearch] = useState('');
  const [review, setReview] = useState('');
  const [numberValue, setNumberValue] = useState('0');

  return (
    <Card sectioned title="TextField component">
      <Stack vertical>
        <TextField
          label="Name"
          placeholder="Type your name"
          value={name}
          onAfterChange={setName}
          clearButton
          onClearButtonClick={clearName}
        />
        {name && <Text>Hello {name}</Text>}
        <TextField
          type="search"
          placeholder="Search for reviews"
          value={search}
          onAfterChange={setSearch}
        />
        <TextField
          placeholder="Add a reply to this review..."
          multiline
          value={review}
          onAfterChange={setReview}
        />
        <TextField type="number" value={numberValue} onAfterChange={setNumberValue} />
        <TextField value="Inline error" error="This field is invalid" />
        <TextField value="42" type="number" suffix="%" label="A real percent" />
        <TextField value="stuff around" prefix="Only the best" label="Cool things" />
        <TextField
          type="search"
          value="cool tech"
          prefix="I'm interested in"
          label="Search prefix"
        />
      </Stack>
    </Card>
  );
}

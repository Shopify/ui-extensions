import React from 'react';
import {Card, Stack, Text} from '@shopify/argo-react/components';

export function TextExample() {
  return (
    <Card sectioned title="Text component">
      <Stack spacing="loose" vertical>
        <Text size="titleExtraLarge">Titles (Extra Large)</Text>
        <Text size="titleLarge">Large Title Text</Text>
        <Text size="titleMedium">Medium Title Text</Text>
        <Text size="titleSmall">Some more text here</Text>
        <Text size="medium">The most regualr type of text there is.</Text>
        <Text size="small">I is such smallz</Text>

        <Text size="titleExtraLarge">Colours</Text>

        <Text style="normal">Normal style</Text>
        <Text style="italic">Italic style</Text>
        <Text style="monospace">Monospace style</Text>
        <Text style="strong">Strong style</Text>

        <Text color="success">Super success text!</Text>
        <Text color="error">Womp womp... this is an error...</Text>
        <Text color="secondary">Can't always be first</Text>

        <Text size="small" color="success">
          I is cool colours and smallz
        </Text>
        <Text size="titleLarge" color="secondary">
          Secondary title with color
        </Text>

        <Text size="titleExtraLarge">Alignment</Text>
        <Text alignment="left">Left behind.</Text>
        <Text alignment="right">Right on time!</Text>
        <Text alignment="center">Right smack in the middle!</Text>
        <Text alignment="justify">
          The Justice League brings justified justice upon the bad guys!
        </Text>
        <Text alignment="center" size="titleMedium" color="success">
          Green, centered and IN YO FACE!
        </Text>
      </Stack>
    </Card>
  );
}

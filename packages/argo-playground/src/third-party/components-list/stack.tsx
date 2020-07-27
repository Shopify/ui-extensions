import {
  Card,
  Stack,
  Text,
  CardSection,
  StackItem,
  TextField,
  Button,
  Icon,
  IconProps,
} from '@shopify/argo-admin-react';
import React from 'react';

const SORT_ICON: IconProps = {
  source: 'sortMinor',
};

export function StackExample() {
  return (
    <Card title="Stack component">
      <CardSection>
        <Stack>
          <StackItem fill>
            <TextField type="search" placeholder="Search for reviews" />
          </StackItem>
          <StackItem>
            <Button title="Sort" icon={SORT_ICON} />
          </StackItem>
        </Stack>
      </CardSection>
      <CardSection title="Default">
        <Stack>
          <Icon source="starFilled" color="yellow" />
          <Icon source="starFilled" color="yellow" />
          <Icon source="starHollow" />
        </Stack>
      </CardSection>
      <CardSection title="Spacing none">
        <Stack spacing="none">
          <Icon source="starFilled" color="yellow" />
          <Icon source="starFilled" color="yellow" />
          <Icon source="starHollow" />
        </Stack>
      </CardSection>
      <CardSection title="Distribution fill">
        <Stack distribution="fill">
          <Icon source="starFilled" color="yellow" />
          <Icon source="starFilled" color="yellow" />
          <Icon source="starHollow" />
        </Stack>
      </CardSection>
      <CardSection title="Distribution center">
        <Stack distribution="center">
          <Icon source="starFilled" color="yellow" />
          <Icon source="starFilled" color="yellow" />
          <Icon source="starHollow" />
        </Stack>
      </CardSection>
      <CardSection title="Vertical">
        <Stack vertical>
          <Icon source="starFilled" color="yellow" />
          <Icon source="starFilled" color="yellow" />
          <Icon source="starHollow" />
        </Stack>
      </CardSection>
      <CardSection title="StackItem fill">
        <Stack>
          <Icon source="starFilled" color="yellow" />
          <StackItem fill>
            <Stack>
              <StackItem>
                <Text>Foo</Text>
              </StackItem>
              <StackItem fill />
              <StackItem>
                <Text>Bar</Text>
              </StackItem>
            </Stack>
          </StackItem>
          <Icon source="starHollow" />
        </Stack>
      </CardSection>
    </Card>
  );
}

import React from 'react';
import {
  render,
  View,
  Image,
  Icon,
  Pressable,
  Disclosure,
  InlineLayout,
  BlockStack,
  Text,
  Form,
  TextField,
  Button,
  Divider,
  InlineStack,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <DisclosureAndAlignment />
));

export const DisclosureAndAlignment = () => {
  const openIds = ['one'];
  return (
    <View
      maxInlineSize={400}
      cornerRadius="large"
      border="base"
    >
      <BlockStack spacing="none">
        <Disclosure
          defaultOpen="one"
          onToggle={(open) =>
            console.log('onToggle event', open)
          }
        >
          <Pressable toggles="one" padding="base">
            <InlineLayout
              blockAlignment="center"
              spacing="base"
              columns={['auto', 'fill', 'auto']}
            >
              <Icon
                source="gift"
                appearance="subdued"
              />
              Gift message
              <Icon
                source={
                  openIds.includes('one')
                    ? 'chevronUp'
                    : 'chevronDown'
                }
                appearance="subdued"
              />
            </InlineLayout>
          </Pressable>
          <View
            id="one"
            padding={[
              'none',
              'base',
              'base',
              'base',
            ]}
          >
            <Form
              onSubmit={() =>
                console.log('onSubmit event')
              }
            >
              <BlockStack>
                <InlineLayout
                  columns={['fill', 'fill']}
                  spacing="base"
                >
                  <TextField
                    label="From"
                    name="from0"
                    id="from0"
                  />
                  <TextField
                    label="To"
                    name="to0"
                    id="to0"
                  />
                </InlineLayout>
                <TextField
                  label="Message"
                  name="message0"
                  id="message0"
                />
                <View>
                  <Button
                    accessibilityRole="submit"
                    kind="secondary"
                  >
                    Save
                  </Button>
                </View>
              </BlockStack>
            </Form>
          </View>
        </Disclosure>
        <Divider />
        <InlineLayout
          blockAlignment="baseline"
          spacing="base"
          columns={['auto', 'fill', 'auto']}
          padding="base"
        >
          <Icon
            source="profile"
            appearance="subdued"
          />
          <BlockStack spacing="none">
            <InlineStack blockAlignment="center">
              <Text>Verify with</Text>
              <Image source="https://via.placeholder.com/50x15" />
            </InlineStack>
            <Text
              appearance="subdued"
              size="small"
            >
              15% savings for students and
              military
            </Text>
          </BlockStack>
          <Pressable to="https://www.shopify.com">
            <Icon
              source="external"
              appearance="subdued"
            />
          </Pressable>
        </InlineLayout>
      </BlockStack>
    </View>
  );
};

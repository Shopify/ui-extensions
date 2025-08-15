import {
  BlockStack,
  Button,
  InlineStack,
  Link,
  Modal,
  reactExtension,
  TextField,
  Text,
  useApi,
} from '@shopify/ui-extensions-react/customer-account';

// 1. Choose an extension target
export default reactExtension(
  'customer-account.order-status.announcement.render',
  () => <Extension />,
);

function Extension() {
  // 2. Use the extension API to gather context from the shop
  const {shop} = useApi();

  // 3. Render a UI
  return (
    <InlineStack>
      <Text>Check our latest offers</Text>
      <Link
        overlay={
          <Modal
            title="Tell us about your shopping experience"
            padding
          >
            <BlockStack>
              <Text>
                We'd love to hear about your
                shopping experience at {shop.name}
              </Text>
              <TextField
                multiline={4}
                label="How can we make your shopping experience better?"
              ></TextField>
              <Button>Submit</Button>
            </BlockStack>
          </Modal>
        }
      >
        Fill out the survey
      </Link>
    </InlineStack>
  );
}

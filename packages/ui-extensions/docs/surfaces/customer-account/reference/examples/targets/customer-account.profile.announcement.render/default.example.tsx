import {
  BlockStack,
  Button,
  InlineStack,
  Link,
  Modal,
  reactExtension,
  TextField,
  Text,
} from '@shopify/ui-extensions-react/customer-account';

// 1. Choose an extension target
export default reactExtension(
  'customer-account.profile.announcement.render',
  () => <Extension />,
);

function Extension() {
  // 2. Render a UI
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
                shopping experience
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

import {
  reactExtension,
  useApi,
  Button,
  Link,
  Modal,
  TextBlock,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {ui} = useApi();

  return (
    <Link
      overlay={
        <Modal
          id="my-modal"
          padding
          title="Return policy"
        >
          <TextBlock>
            We have a 30-day return policy.
          </TextBlock>
          <Button
            onPress={() =>
              ui.overlay.close('my-modal')
            }
          >
            Close
          </Button>
        </Modal>
      }
    >
      Return policy
    </Link>
  );
}

import {
  Button,
  Link,
  Modal,
  reactExtension,
  Text,
  TextBlock,
  useShippingOptionTarget,
  useApi,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.shipping-option-item.render-after',
  () => <Extension />,
);

function Extension() {
  const {
    shippingOptionTarget,
    isTargetSelected,
    renderMode,
  } = useShippingOptionTarget();
  const {ui} = useApi();
  const {
    cost: {amount, currencyCode},
    title,
  } = shippingOptionTarget;

  // When the target is rendered inside the "More shipping options" modal for split shipping scenarios, `renderMode.overlay` is true. This check allows to render an alternative UI to avoid nested modals.
  if (renderMode.overlay) {
    return (
      <Text>
        Shipping method: {title} is{' '}
        {isTargetSelected ? '' : 'not'} selected.
      </Text>
    );
  }

  // When the target is rendered inline for both split shipping and non-split shipping scenarios, a Modal can be rendered if desired.
  return (
    <Link
      overlay={
        <Modal
          id="my-modal"
          padding
          title={`Shipping option: ${title}`}
        >
          <View
            padding={[
              'none',
              'none',
              'base',
              'none',
            ]}
          >
            <TextBlock>
              Cost:{' '}
              {Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: currencyCode,
              }).format(amount)}
            </TextBlock>
          </View>
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
      View details ({title} is{' '}
      {isTargetSelected ? '' : 'not'} selected)
    </Link>
  );
}

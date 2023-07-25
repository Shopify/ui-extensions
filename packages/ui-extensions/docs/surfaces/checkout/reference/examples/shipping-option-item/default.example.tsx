import {
  reactExtension,
  Text,
  useApi,
  useSubscription,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.shipping-option-item.render-after',
  () => <Extension />,
);

function Extension() {
  const {target, isTargetSelected} =
    useApi<'purchase.checkout.shipping-option-item.render-after'>();
  const shippingOption = useSubscription(target);
  const title = shippingOption?.title;

  const selected = useSubscription(
    isTargetSelected,
  );

  return (
    <Text>
      Shipping method: {title} is{' '}
      {selected ? '' : 'not'} selected.
    </Text>
  );
}

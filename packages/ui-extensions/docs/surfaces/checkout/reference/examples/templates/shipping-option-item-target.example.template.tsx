import {
  reactExtension,
  Text,
  useApi,
  useSubscription,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  '##TARGET##',
  () => <Extension />,
);

function Extension() {
  const {target, isTargetSelected} =
    useApi<'##TARGET##'>();
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

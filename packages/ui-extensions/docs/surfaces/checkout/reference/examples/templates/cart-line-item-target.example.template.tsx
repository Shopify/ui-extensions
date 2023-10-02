import {
  reactExtension,
  Text,
  useTarget,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  '##TARGET##',
  () => <Extension />,
);

function Extension() {
  const {
    merchandise: {title},
  } = useTarget();
  return <Text>Line item title: {title}</Text>;
}

import {
  reactExtension,
  Icon,
  Pressable,
  Tooltip,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Pressable
      overlay={
        <Tooltip>
          In case we need to contact you about
          your order
        </Tooltip>
      }
    >
      <Icon source="questionFill" />
    </Pressable>
  );
}

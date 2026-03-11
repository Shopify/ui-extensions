import {
  reactExtension,
  ToggleButton,
  ToggleButtonGroup,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ToggleButtonGroup
      value="none"
      onChange={(value) => {
        console.log(
          `onChange event with value: ${value}`,
        );
      }}
    >
      <ToggleButton id="none">None</ToggleButton>
    </ToggleButtonGroup>
  );
}

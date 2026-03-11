import {
  reactExtension,
  Select,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Select
      label="Country"
      value="2"
      options={[
        {
          value: '1',
          label: 'Australia',
        },
        {
          value: '2',
          label: 'Canada',
        },
        {
          value: '3',
          label: 'France',
        },
        {
          value: '4',
          label: 'Japan',
        },
        {
          value: '5',
          label: 'Nigeria',
        },
        {
          value: '6',
          label: 'United States',
        },
      ]}
    />
  );
}

import {reactExtension, Paragraph, Text, Link, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Paragraph>
        <Text>
          This product requires special handling during fulfillment. Review the{' '}
        </Text>
        <Link
          href="https://help.shopify.com/manual/fulfillment"
          target="_blank"
        >
          fulfillment guidelines
        </Link>
        <Text>
          {' '}for packaging requirements and carrier restrictions before
          processing orders.
        </Text>
      </Paragraph>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

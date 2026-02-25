import {reactExtension, Section, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Section heading="Product compliance">
        <Text>Regulatory status for product distribution.</Text>
        <Section heading="Safety certifications">
          <Text>UL Listed — Class II</Text>
          <Text>CE Marking — Approved</Text>
          <Text>FCC Part 15 — Compliant</Text>
        </Section>
      </Section>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

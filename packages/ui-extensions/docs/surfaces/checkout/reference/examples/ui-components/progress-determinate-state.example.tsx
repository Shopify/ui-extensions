import {
  reactExtension,
  BlockStack,
  Grid,
  Progress,
  Text,
  TextBlock,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.footer.render-after', () => (
  <Extension />
));

function Extension() {
  const label = 'Queue process';
  return (
    <BlockStack>
      <Grid columns={['fill', 'auto']}>
        <Text>{label}</Text>
        <Text appearance="subdued">45% completed</Text>
      </Grid>
      <Progress value={45} max={100} accessibilityLabel={label} />
      <TextBlock appearance="subdued">Estimated wait time: 4 minutes</TextBlock>
    </BlockStack>
  );
}

import {
  render,
  Grid,
  GridItem,
  View,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Grid
      columns={['20%', 'fill', 'auto']}
      rows={[300, 'auto']}
      spacing="loose"
    >
      <View border="base" padding="base">
        20% / 300
      </View>
      <View border="base" padding="base">
        fill / 300
      </View>
      <View border="base" padding="base">
        auto / 300
      </View>
      <GridItem columnSpan={2}>
        <View border="base" padding="base">
          20% + fill / auto
        </View>
      </GridItem>
      <View border="base" padding="base">
        auto / auto
      </View>
    </Grid>
  );
}

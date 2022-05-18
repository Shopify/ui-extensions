import {render, Grid, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Grid columns={['20%', 'fill']} rows={['auto', 300, 100]}>
      <View border="base" padding="base">
        20% / auto
      </View>
      <View border="base" padding="base">
        fill / auto
      </View>
      <View border="base" padding="base">
        20% / 300
      </View>
      <View border="base" padding="base">
        fill / 300
      </View>
      <View border="base" padding="base">
        20% / 100
      </View>
      <View border="base" padding="base">
        fill / 100
      </View>
    </Grid>
  );
}

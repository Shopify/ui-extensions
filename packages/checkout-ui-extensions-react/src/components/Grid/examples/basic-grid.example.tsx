import {render, Grid, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Grid columns={['20%', 'fill']} rows={['auto', '300px', '100px']}>
      <View border="base" padding="base">
        20% / auto
      </View>
      <View border="base" padding="base">
        fill / auto
      </View>
      <View border="base" padding="base">
        20% / 300px
      </View>
      <View border="base" padding="base">
        fill / 300px
      </View>
      <View border="base" padding="base">
        20% / 100px
      </View>
      <View border="base" padding="base">
        fill / 100px
      </View>
    </Grid>
  );
}

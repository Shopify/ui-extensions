import {
  render,
  Grid,
  GridItem,
  View,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Grid columns={3}>
      <View>View</View>
      <GridItem columnSpan={2}>
        <View blockSize={1}>View span 2 columns</View>
      </GridItem>
      <View>View</View>
      <View>View</View>
      <View>View</View>
      <GridItem rowSpan={2}>
        <View blockSize={1}>View span 2 rows</View>
      </GridItem>
      <View>View</View>
      <View>View</View>
      <View>View</View>
      <View>View</View>
    </Grid>
  );
}

import {Style, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <View
      maxInlineSize={Style.default(200)
        .when({viewportInlineSize: {min: 'small'}}, 300)
        .when({viewportInlineSize: {min: 'medium'}}, 400)
        .when({viewportInlineSize: {min: 'large'}}, 800)}
    >
      Responsive Content
    </View>
  );
}

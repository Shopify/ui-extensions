import {Style, View} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
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
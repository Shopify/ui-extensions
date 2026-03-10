import {
  reactExtension,
  Style,
  View,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension('customer-account.page.render', () => (
  <Extension />
));

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

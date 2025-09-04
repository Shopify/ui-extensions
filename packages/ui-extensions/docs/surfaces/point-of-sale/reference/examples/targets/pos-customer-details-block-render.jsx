import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-pos-block action={{title: 'Open action', onPress: () => shopify.action.presentModal()}}>
      <s-pos-block-row>
        <s-text>This is a block extension</s-text>
        <s-text>Customer ID for this customer: {shopify.customer.id}</s-text>
      </s-pos-block-row>
    </s-pos-block>
  );
};

import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-pos-block>
      <s-button
        slot="secondary-actions"
        onClick={() => shopify.action.presentModal()}
      >
        Open action
      </s-button>
      <s-text>This is a block extension</s-text>
      <s-text>Product ID for this product: {shopify.product.id}</s-text>
    </s-pos-block>
  );
};

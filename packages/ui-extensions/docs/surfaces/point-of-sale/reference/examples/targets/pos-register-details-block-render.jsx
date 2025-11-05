import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-pos-block>
      <s-text>This is a block extension on the register details screen</s-text>
      <s-button
        slot="secondary-actions"
        onClick={() => shopify.cashDrawer.open()}
      >
        Open drawer
      </s-button>
    </s-pos-block>
  );
};

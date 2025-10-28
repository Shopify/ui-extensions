import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-page heading="Cash Drawer API">
      <s-scroll-box>
        <s-button
          onClick={() =>
            shopify.cashDrawer.open()
          }
        >
          Open cash drawer
        </s-button>
      </s-scroll-box>
    </s-page>
  );
};

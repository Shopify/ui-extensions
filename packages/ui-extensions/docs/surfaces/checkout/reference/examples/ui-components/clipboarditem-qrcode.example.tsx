import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  const bitcoinAddress =
    '14qViLJfdGaP4EeHnDyJbEGQysnCpwk3gd';

  render(
    <s-stack
      maxInlineSize={200}
      direction="block"
    >
      <s-qrcode
        size="fill"
        content={`bitcoin:${bitcoinAddress}`}
      />
      <s-button commandFor="bitcoin-address">
        Copy Bitcoin address
      </s-button>
      <s-clipboard-item
        text={bitcoinAddress}
        id="bitcoin-address"
      />
    </s-stack>,
    document.body,
  );
}

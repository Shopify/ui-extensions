import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {storage} = shopify;
  const [dismissed, setDismissed] =
    useState(true);

  useEffect(() => {
    async function checkDismissed() {
      const value =
        await storage.read('promo-dismissed');
      setDismissed(Boolean(value));
    }

    checkDismissed();
  }, [storage]);

  async function dismiss() {
    setDismissed(true);
    await storage.write(
      'promo-dismissed',
      true,
    );
  }

  async function reset() {
    setDismissed(false);
    await storage.delete('promo-dismissed');
  }

  if (dismissed) {
    return (
      <s-button onClick={reset}>
        Show promotion again
      </s-button>
    );
  }

  return (
    <s-banner
      heading="Limited offer"
      dismissible
      onDismiss={dismiss}
    >
      Use code SAVE20 for 20% off today.
    </s-banner>
  );
}

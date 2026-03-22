import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const territoryCode =
    shopify.localization?.country?.value?.isoCode;

  if (territoryCode === 'CA') {
    return (
      <s-banner tone="warning">
        {shopify.i18n.translate(
          'canadaPostWarningMessage',
        )}
      </s-banner>
    );
  }
}

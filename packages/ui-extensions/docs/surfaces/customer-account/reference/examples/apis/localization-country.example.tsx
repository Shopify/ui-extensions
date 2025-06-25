/* See the locales/en.default.json tab for the translation keys and values for this example */
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const countryCode =
    shopify.localization?.country?.value?.isoCode;

  if (countryCode === 'CA') {
    return (
      <s-banner status="warning">
        {shopify.i18n.translate(
          'canadaPostWarningMessage',
        )}
      </s-banner>
    );
  }
}

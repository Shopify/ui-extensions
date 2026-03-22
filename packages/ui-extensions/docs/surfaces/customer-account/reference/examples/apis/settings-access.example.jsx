import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const bannerTitle =
    String(shopify.settings.value?.banner_title || '');

  return <s-banner heading={bannerTitle} />;
}

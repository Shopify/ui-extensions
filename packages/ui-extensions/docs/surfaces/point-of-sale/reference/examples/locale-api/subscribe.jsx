import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';
// Allows the use of `shopify.locale.current.value` as a stateful subscription.
import '@shopify/ui-extensions/preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [locale, setLocale] = useState(
    shopify.locale.current.value
  );

  useEffect(() => {
    const unsubscribe = shopify.locale.current.subscribe((newLocale) => {
      setLocale(newLocale);
    });
    return unsubscribe;
  }, []);

  return (
    <s-tile
      heading="My App"
      subheading={locale}
    />
  );
};

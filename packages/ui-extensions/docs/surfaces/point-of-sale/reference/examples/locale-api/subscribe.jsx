import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

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

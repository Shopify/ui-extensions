import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  const [bannerTitle, setBannerTitle] = useState(
    shopify.settings.current?.banner_title || '',
  );

  useEffect(() => {
    shopify.settings.subscribe(
      (updatedSettings) => {
        setBannerTitle(
          updatedSettings.banner_title,
        );
      },
    );
  }, []);

  return <s-banner title={bannerTitle} />;
}

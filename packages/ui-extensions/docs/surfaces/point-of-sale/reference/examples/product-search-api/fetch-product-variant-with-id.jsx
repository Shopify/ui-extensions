import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [variant, setVariant] = useState(null);

  useEffect(() => {
    const fetchProductVariant = async () => {
      const resultProductVariant = await shopify.productSearch.fetchProductVariantWithId(1);
      setVariant(resultProductVariant);
    };

    fetchProductVariant();
  }, []);

  return (
    <s-page heading="Hello World!">
      <s-scroll-box>
        <s-text>
          {variant ? `Variant: ${variant.title}` : 'Loading...'}
        </s-text>
      </s-scroll-box>
    </s-page>
  );
};

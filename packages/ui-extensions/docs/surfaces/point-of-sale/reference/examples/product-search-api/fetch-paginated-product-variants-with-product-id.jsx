import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    const fetchProductVariants = async () => {
      const results = await shopify.productSearch.fetchPaginatedProductVariantsWithProductId(1, {first: 10});
      setVariants(results.items);
      console.log('Cursor for next page: ', results.lastCursor);
    };

    fetchProductVariants();
  }, []);

  return (
    <s-navigator initial-screen-name="HelloWorld">
      <s-screen name="HelloWorld" title="Hello World!">
        <s-scroll-box>
          <s-text>Found {variants.length} variants</s-text>
          {variants.map((variant) => (
            <s-text key={variant.id}>{variant.title}</s-text>
          ))}
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};

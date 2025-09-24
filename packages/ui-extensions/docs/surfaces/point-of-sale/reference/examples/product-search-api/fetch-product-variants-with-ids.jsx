import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    const fetchProductVariants = async () => {
      const results = await shopify.productSearch.fetchProductVariantsWithIds([1, 2, 3]);
      setVariants(results.fetchedResources);
      console.log('IDs not found: ', results.idsForResourcesNotFound);
    };

    fetchProductVariants();
  }, []);

  return (
    <s-page heading="Hello World!">
      <s-scroll-box>
        <s-text>Found {variants.length} variants</s-text>
        {variants.map((variant) => (
          <s-text key={variant.id}>{variant.title}</s-text>
        ))}
      </s-scroll-box>
    </s-page>
  );
};

import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [relatedCount, setRelatedCount] = useState(0);

  const currentProductId = data.selected[0]?.id;

  const handleSelectRelated = async () => {
    const selectedProducts = await shopify.resourcePicker({
      type: 'product',
      multiple: true,
      filter: {
        hidden: false,
        draft: false,
      },
    });

    if (selectedProducts) {
      await fetch('/api/product-recommendations', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          productId: currentProductId,
          relatedProducts: selectedProducts.map((p) => p.id),
        }),
      });
      
      setRelatedCount(selectedProducts.length);
    }
  };

  return (
    <s-admin-block heading="Product Recommendations">
      <s-button onClick={handleSelectRelated}>Select Related Products</s-button>
      {relatedCount > 0 && (
        <s-text>Added {relatedCount} related products</s-text>
      )}
    </s-admin-block>
  );
}

import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await shopify.productSearch.fetchProductsWithIds([1, 2, 3]);
      setProducts(results.fetchedResources);
      console.log('IDs not found: ', results.idsForResourcesNotFound);
    };

    fetchProducts();
  }, []);

  return (
    <s-page heading="Hello World!">
      <s-scroll-box>
        <s-text>Found {products.length} products</s-text>
        {products.map((product) => (
          <s-text key={product.id}>{product.title}</s-text>
        ))}
      </s-scroll-box>
    </s-page>
  );
};

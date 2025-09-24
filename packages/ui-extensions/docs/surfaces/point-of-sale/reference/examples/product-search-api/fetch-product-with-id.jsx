import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const resultProduct = await shopify.productSearch.fetchProductWithId(1);
      setProduct(resultProduct);
    };

    fetchProduct();
  }, []);

  return (
    <s-page heading="Hello World!"> 
      <s-scroll-box>
        <s-text>
          {product ? `Product: ${product.title}` : 'Loading...'}
        </s-text>
      </s-scroll-box>
    </s-page>
  );
};

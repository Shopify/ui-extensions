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
    <s-navigator initial-screen-name="HelloWorld">
      <s-screen name="HelloWorld" title="Hello World!">
        <s-scroll-box>
          <s-text>
            {product ? `Product: ${product.title}` : 'Loading...'}
          </s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};

import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    
    const token = await shopify.auth.idToken();

    const response = await fetch('https://my-app.com/api/products', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  return (
    <s-admin-block heading="Backend Data">
      <s-button onClick={handleFetch} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch from Backend'}
      </s-button>
      {products.length > 0 && (
        <s-text>{products.length} products loaded</s-text>
      )}
    </s-admin-block>
  );
}

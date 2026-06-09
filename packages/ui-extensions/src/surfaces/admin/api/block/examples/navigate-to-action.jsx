import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [eligible, setEligible] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkEligibility = async () => {
      const productId = data.selected[0]?.id;

      if (!productId) {
        setChecking(false);
        return;
      }

      const response = await fetch(`/api/products/${productId}/check-eligibility`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });

      const {eligible} = await response.json();
      setEligible(eligible);
      setChecking(false);
    };

    checkEligibility();
  }, [data]);

  const handleNavigate = () => {
    shopify.navigation.navigate('extension://my-product-action-extension-handle');
  };

  return (
    <s-admin-block heading="Advanced Actions">
      {checking ? (
        <s-spinner />
      ) : eligible ? (
        <s-button onClick={handleNavigate}>Launch Advanced Workflow</s-button>
      ) : (
        <s-text>Product not eligible for advanced actions</s-text>
      )}
    </s-admin-block>
  );
}

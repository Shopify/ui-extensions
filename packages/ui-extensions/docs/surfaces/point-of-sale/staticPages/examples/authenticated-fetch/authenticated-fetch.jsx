import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<CustomerDetailsBlock />, document.body);
};

export function CustomerDetailsBlock() {
  const [loyaltyInfo, setLoyaltyInfo] = useState('');
  useEffect(() => {
    getLoyaltyInfo();
  }, [shopify.customer.id]);

  async function getLoyaltyInfo() {
    console.log('fetching', `${URL}/api/loyalty/${shopify.customer.id}`)
    const res = await fetch(`${URL}/api/loyalty/${shopify.customer.id}`);
    const json = await res.json();
    setLoyaltyInfo(json.loyaltySummary);
  }
  return (
    <s-pos-block>
      <s-box padding="large">
        <s-text>{loyaltyInfo}</s-text>
      </s-box>
    </s-pos-block>
  );
}
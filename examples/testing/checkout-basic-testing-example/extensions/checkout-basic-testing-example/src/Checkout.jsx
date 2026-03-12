import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useRef, useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const dateRef = useRef(/** @type {any} */ (null));
  const [result, setResult] = useState(/** @type {any} */ (null));
  const [greeting, setGreeting] = useState(/** @type {string|null} */ (null));

  const existingEntry = shopify.appMetafields.value.find(
    (entry) =>
      entry.target.type === 'cart' && entry.metafield.key === 'user-birth-date',
  );

  async function handleClick() {
    const value = dateRef.current?.value ?? '';
    const result = await shopify.applyMetafieldChange({
      type: 'updateCartMetafield',
      metafield: {
        key: 'user-birth-date',
        value,
        type: 'date',
      },
    });
    setResult(result);
  }

  async function handleFetchGreeting() {
    const response = await fetch('https://httpbin.org/get?message=Hello!');
    const data = await response.json();
    setGreeting(data.args.message);
  }

  return (
    <>
      <s-date-field
        ref={dateRef}
        label="Enter your birth date"
        value={existingEntry?.metafield.value}
      />
      <s-button onClick={handleClick}>Enter</s-button>
      {result?.type === 'success' && (
        <s-banner tone="success">Saved successfully</s-banner>
      )}
      <s-button onClick={handleFetchGreeting}>Fetch greeting</s-button>
      {greeting && <s-text id="greeting">{greeting}</s-text>}
    </>
  );
}

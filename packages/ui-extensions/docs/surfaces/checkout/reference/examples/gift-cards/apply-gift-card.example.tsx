import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [code, setCode] = useState('');

  async function applyGiftCard() {
    if (!code) return;

    const result =
      await shopify.applyGiftCardChange({
        type: 'addGiftCard',
        code,
      });

    if (result.type === 'error') {
      console.error(result.message);
    } else {
      setCode('');
    }
  }

  return (
    <s-stack>
      <s-text-field
        label="Gift card code"
        value={code}
        onInput={(e) =>
          setCode(e.currentTarget.value)
        }
      />
      <s-button onClick={applyGiftCard}>
        Apply gift card
      </s-button>
    </s-stack>
  );
}

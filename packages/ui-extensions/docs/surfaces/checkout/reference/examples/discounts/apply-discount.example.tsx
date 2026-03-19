import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [code, setCode] = useState('');

  const canUpdate =
    shopify.instructions.value.discounts
      .canUpdateDiscountCodes;

  async function applyDiscount() {
    if (!code) return;

    const result =
      await shopify.applyDiscountCodeChange({
        type: 'addDiscountCode',
        code,
      });

    if (result.type === 'error') {
      console.error(result.message);
    } else {
      setCode('');
    }
  }

  if (!canUpdate) {
    return null;
  }

  return (
    <s-stack>
      <s-text-field
        label="Discount code"
        value={code}
        onInput={(e) =>
          setCode(e.currentTarget.value)
        }
      />
      <s-button onClick={applyDiscount}>
        Apply discount
      </s-button>
    </s-stack>
  );
}

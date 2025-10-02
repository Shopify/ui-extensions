import {render} from 'preact';

export default function extension() {
  render(<SmartGridModal />, document.body);
}

function SmartGridModal() {
  // [START modal.define-onpress]
  const onButtonClick = (type, title, amount) => {
    shopify.cart.applyCartDiscount(type, title, amount);
    shopify.toast.show('Discount applied');
  };
  // [END modal.define-onpress]

  return (
    <s-page title="Available Discounts">
      <s-scroll-box padding='base'>
        <s-button
          onClick={() => onButtonClick('Percentage', '25% off', '25')}
        >
          25%
        </s-button>
        <s-button
          onClick={() => onButtonClick('FixedAmount', '$10 off', '10')}
        >
          $10
        </s-button>
      </s-scroll-box>
    </s-page>
  );
}

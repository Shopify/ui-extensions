import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const onButtonPress = (type, title, amount) => {
    // You can apply a discount through the cart API
    shopify.cart.applyCartDiscount(type, title, amount);

    // You can show a toast to notify the user of something
    shopify.toast.show('Discount applied');
  };

  return (
    <s-navigator>
      <s-screen name="Discounts" title="Available Discounts">
        <s-scroll-view>
          <s-button onClick={() => onButtonPress('Percentage', '25% off', '25')}>
            25%
          </s-button>
          <s-button onClick={() => onButtonPress('FixedAmount', '$10 off', '10')}>
            $10
          </s-button>
        </s-scroll-view>
      </s-screen>
    </s-navigator>
  );
};

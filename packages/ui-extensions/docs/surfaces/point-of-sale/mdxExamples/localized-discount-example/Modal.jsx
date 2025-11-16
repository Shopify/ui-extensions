import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {i18n} = shopify;
  // [START localization.format-points]
  const percentageDiscount = 25.5;
  const formattedPercentageDiscount = i18n.formatNumber(percentageDiscount);
  // [END localization.format-points]
  // [START localization.format-balance]
  const fixedDiscountAmount = 10;
  const formattedFixedDiscountAmount = i18n.formatCurrency(fixedDiscountAmount, {currency: 'CAD'});
  // [END localization.format-balance]
  // [START localization.translate-points]
  const itemCount = shopify.cart.current.value.lineItems.length;
  // [END localization.translate-points]
  const onButtonClick = (type, title, amount) => {
    shopify.cart.applyCartDiscount(type, title, amount);
    // [START localization.translate-balance]
    shopify.toast.show(i18n.translate('discountApplied'));
    // [END localization.translate-balance]
  };

  return (
    // [START localization.build-ui]
    <s-page heading={i18n.translate('modalTitle')}>
      <s-scroll-box>
      <s-stack gap="base">
        <s-text>
          {i18n.translate('itemCount', {count: itemCount})}
        </s-text>
        <s-button onClick={() => onButtonClick('Percentage', '25% off', '25')}>
          {formattedPercentageDiscount}%
        </s-button>
        <s-button onClick={() => onButtonClick('FixedAmount', '$10 off', '10')}>
          {formattedFixedDiscountAmount}
        </s-button>
        </s-stack>
      </s-scroll-box>
    </s-page>
  );
}
// [END localization.build-ui]
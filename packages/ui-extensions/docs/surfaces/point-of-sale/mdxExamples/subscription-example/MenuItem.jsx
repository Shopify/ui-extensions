import {render} from 'preact';

export default function extension() {
  render(<MenuItem />, document.body);
}

function MenuItem() {
  const handleButtonPress = () => {
    shopify.action.presentModal();
  };

  const hasSellingPlanGroups = shopify.cartLineItem?.hasSellingPlanGroups;

  return (
    <s-button onClick={handleButtonPress} disabled={!hasSellingPlanGroups} />
  );
}

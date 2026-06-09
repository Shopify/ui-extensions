import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';
// Allows the use of `shopify.cart.current.value` as a stateful subscription.
import '@shopify/ui-extensions/preact';
import {fetchSellingPlans} from './FetchSellingPlans';

export default function extension() {
  render(<Modal />, document.body);
}

function Modal() {
  // For this example, we'll just use the first selling plan item
  // Your app should handle displaying multiple line items with selling plan groups.
  const sellingPlanItem = shopify.cart.current.value.lineItems.find(
    (lineItem) => lineItem.hasSellingPlanGroups === true,
  );

  const [response, setResponse] = useState(undefined);

  useEffect(() => {
    async function getSellingPlans() {
      setResponse(await fetchSellingPlans(sellingPlanItem?.variantId));
    }
    getSellingPlans();
  }, [sellingPlanItem]);

  // [START modal.handle-click]
  const handleClick = (plan) => {
    shopify.cart.addLineItemSellingPlan({
      lineItemUuid: sellingPlanItem.uuid,
      // convert from GID to ID
      sellingPlanId: Number(plan.id.split('/').pop()),
      sellingPlanName: plan.name,
    });
    window.close();
  };
  // [END modal.handle-click]

  // [START modal.display]
  return (
    <s-page heading="POS subscription modal">
      <s-scroll-box>
        <s-box padding="small">
          {response?.data.productVariant.sellingPlanGroups.nodes.map(
            (group) => {
              return (
                <s-section key={`${group.name}-section`} heading={group.name}>
                  {group.sellingPlans.nodes.map((plan) => {
                    return (
                      <s-clickable
                        key={`${plan.name}-clickable`}
                        onClick={() => {
                          handleClick(plan);
                        }}
                      >
                        <s-text key={`${plan.name}-text`}>{plan.name}</s-text>
                      </s-clickable>
                    );
                  })}
                </s-section>
              );
            },
          )}
        </s-box>
      </s-scroll-box>
    </s-page>
  );
  // [END modal.display]
}

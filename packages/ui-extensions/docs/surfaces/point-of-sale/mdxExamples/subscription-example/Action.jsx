import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';
import {fetchSellingPlans} from './FetchSellingPlans';

export default function extension() {
  render(<Action />, document.body);
}

function Action() {
  const [response, setResponse] = useState(undefined);

  useEffect(() => {
    async function getSellingPlans() {
      setResponse(await fetchSellingPlans(shopify.cartLineItem?.variantId));
    }
    getSellingPlans();
  }, [shopify.cartLineItem]);

  const handleClick = (plan) => {
    shopify.cart.addLineItemSellingPlan({
      lineItemUuid: shopify.cartLineItem.uuid,
      sellingPlanId: Number(plan.id.split('/').pop()),
      sellingPlanName: plan.name,
    });
    window.close();
  };

  return (
    <s-page heading="Subscriptions">
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
}

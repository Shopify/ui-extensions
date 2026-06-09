import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [plan, setPlan] = useState(null);

  const {sellingPlanId} = data.selected[0];

  const handleValidate = async () => {
    const {data: planData} = await shopify.query(
      `query GetSellingPlan($id: ID!) {
        sellingPlanGroup(id: $id) {
          sellingPlans(first: 1) {
            edges {
              node {
                id
                name
                options
              }
            }
          }
        }
      }`,
      {variables: {id: sellingPlanId}},
    );

    setPlan(planData.sellingPlanGroup.sellingPlans.edges[0]?.node);
    setTimeout(() => shopify.close(), 2000);
  };

  return (
    <s-admin-action title="Validate Selling Plan">
      <s-button onClick={handleValidate}>Check Plan Details</s-button>
      {plan && (
        <>
          <s-text>Plan: {plan.name}</s-text>
          <s-text>Options: {plan.options.length}</s-text>
        </>
      )}
    </s-admin-action>
  );
}

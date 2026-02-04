import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const ValidateSellingPlan = () => {
  const {data, query, close} = useApi<'admin.product-purchase-option.action.render'>();
  const [plan, setPlan] = useState<any>(null);

  const {sellingPlanId} = data.selected[0];

  const handleValidate = async () => {
    const {data: planData} = await query(
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
    setTimeout(() => close(), 2000);
  };

  return (
    <>
      <Button title="Check Plan Details" onPress={handleValidate} />
      {plan && (
        <>
          <Text>Plan: {plan.name}</Text>
          <Text>Options: {plan.options.length}</Text>
        </>
      )}
    </>
  );
};

export default reactExtension(
  'admin.product-purchase-option.action.render',
  () => <ValidateSellingPlan />,
);

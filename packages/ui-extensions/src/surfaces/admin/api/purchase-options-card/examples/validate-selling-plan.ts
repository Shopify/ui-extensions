import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-purchase-option.action.render',
  (root, api) => {
    const {data, query, close} = api;

    let plan = null;

    const {sellingPlanId} = data.selected[0];

    const validateButton = root.createComponent(Button, {
      title: 'Check Plan Details',
      onPress: async () => {
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

        plan = planData.sellingPlanGroup.sellingPlans.edges[0]?.node;

        const nameText = root.createComponent(Text, {}, `Plan: ${plan.name}`);
        const optionsText = root.createComponent(Text, {}, `Options: ${plan.options.length}`);
        
        root.appendChild(nameText);
        root.appendChild(optionsText);

        setTimeout(() => close(), 2000);
      },
    });

    root.appendChild(validateButton);
  },
);

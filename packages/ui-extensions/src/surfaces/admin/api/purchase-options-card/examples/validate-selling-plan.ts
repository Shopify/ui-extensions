import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-purchase-option.action.render',
  (root, api) => {
    const {data, query, close} = api;

    const item = data.selected[0];

    if (item.sellingPlanId) {
      query(
        `query GetSellingPlan($id: ID!) {
          sellingPlanGroup(id: $id) {
            name
            options
          }
        }`,
        {variables: {id: item.sellingPlanId}},
      ).then(({data: planData}) => {
        console.log('Selling plan:', planData.sellingPlanGroup);
        setTimeout(() => close(), 2000);
      });
    }
  },
);

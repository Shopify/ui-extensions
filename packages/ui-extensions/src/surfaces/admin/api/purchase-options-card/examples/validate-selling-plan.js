const {data, query, close} = useApi(TARGET);

const {id: productId, sellingPlanId} = data.selected[0];

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

console.log('Selling plan:', planData);
close();

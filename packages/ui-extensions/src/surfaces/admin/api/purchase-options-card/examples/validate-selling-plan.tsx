import React, {useEffect, useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const ValidateSellingPlan = () => {
  const {data, query, close} = useApi<'admin.product-purchase-option.action.render'>();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
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
        setPlan(planData.sellingPlanGroup);
        setTimeout(() => close(), 2000);
      });
    }
  }, [data, query, close]);

  return null;
};

export default reactExtension('admin.product-purchase-option.action.render', () => <ValidateSellingPlan />);

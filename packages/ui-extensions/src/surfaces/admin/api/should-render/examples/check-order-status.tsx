import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const CheckOrderStatus = () => {
  const {data} = useApi<'admin.order-details.action.should-render'>();

  return {display: data.selected.length === 1};
};

export default reactExtension('admin.order-details.action.should-render', () => <CheckOrderStatus />);

import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const CheckProductTag = () => {
  const {data} = useApi<'admin.product-details.action.should-render'>();

  return {display: data.selected.length > 0};
};

export default reactExtension('admin.product-details.action.should-render', () => <CheckProductTag />);

import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const BulkSelectionCheck = () => {
  const {data} = useApi<'admin.product-index.action.should-render'>();

  const count = data.selected.length;
  return {display: count >= 1 && count <= 50};
};

export default reactExtension('admin.product-index.action.should-render', () => <BulkSelectionCheck />);

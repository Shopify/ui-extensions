import React from 'react';
import {
  reactExtension,
  Button,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

export default reactExtension(
  'pos.smart-grid.block.render',
  () => {
    const api = useApi();

    return (
      <Button
        title="Show Adaptive Selling"
        onPress={() =>
          api.action.presentAdaptiveSelling()
        }
      />
    );
  },
);

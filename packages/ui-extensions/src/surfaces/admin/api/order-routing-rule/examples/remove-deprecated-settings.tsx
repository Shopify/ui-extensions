import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const RemoveDeprecatedSettings = () => {
  const {applyMetafieldsChange} = useApi<'admin.settings.order-routing-rule.render'>();

  const handleCleanup = async () => {
    const deprecatedKeys = ['old_setting_1', 'old_setting_2'];
    
    const removals = deprecatedKeys.map((key) => ({
      type: 'removeMetafield',
      key,
      namespace: 'routing',
    }));

    await applyMetafieldsChange(removals);
  };

  return null;
};

export default reactExtension('admin.settings.order-routing-rule.render', () => <RemoveDeprecatedSettings />);

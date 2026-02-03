import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.order-routing-rule.render',
  (root, api) => {
    const {applyMetafieldsChange} = api;

    const deprecatedKeys = ['old_setting_1', 'old_setting_2'];
    
    const removals = deprecatedKeys.map((key) => ({
      type: 'removeMetafield',
      key,
      namespace: 'routing',
    }));

    applyMetafieldsChange(removals);
  },
);

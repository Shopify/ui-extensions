import {extension, Text, Button, Banner, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.order-routing-rule.render',
  (root, api) => {
    const {data, applyMetafieldsChange} = api;

    let removed = false;
    let resultBanner;

    const stack = root.createComponent(BlockStack);

    const priorityText = root.createComponent(Text, {}, `Rule priority: ${data.rule.priority}`);
    const settingsText = root.createComponent(Text, {}, `Current settings: ${data.rule.metafields.length}`);

    const removeButton = root.createComponent(Button, {
      title: 'Remove Deprecated Settings',
      onPress: () => {
        const deprecatedKeys = ['old_setting', 'legacy_config'];

        const changes = deprecatedKeys.map((key) => ({
          type: 'removeMetafield',
          namespace: 'routing',
          key,
        }));

        applyMetafieldsChange(changes);
        removed = true;

        if (resultBanner) {
          stack.removeChild(resultBanner);
        }

        resultBanner = root.createComponent(
          Banner,
          {status: 'success'},
          'Deprecated settings removed',
        );
        stack.appendChild(resultBanner);
      },
    });

    stack.appendChild(priorityText);
    stack.appendChild(settingsText);
    stack.appendChild(removeButton);

    root.appendChild(stack);
  },
);

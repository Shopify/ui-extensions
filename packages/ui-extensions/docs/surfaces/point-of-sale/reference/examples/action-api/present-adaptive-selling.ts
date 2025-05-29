import {Button, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.smart-grid.block.render', (root, api) => {
  const button = root.createComponent(Button, {
    title: 'Show Adaptive Selling',
    onPress: () => api.action.presentAdaptiveSelling(),
  });

  root.append(button);
});

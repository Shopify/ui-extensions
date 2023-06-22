import {extension, BlockSpacer, View} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const blockSpacer = root.createComponent(View, undefined, [
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(BlockSpacer, {spacing: 'loose'}),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
  ]);

  root.appendChild(blockSpacer);
});

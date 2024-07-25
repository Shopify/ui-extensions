import {
  POSBlock,
  Text,
  POSBlockRow,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.product-details.block.render', (root, api) => {
  const block = root.createComponent(POSBlock, {
    action: {title: 'Open action', onPress: api.action.presentModal},
  });

  const mainText = root.createComponent(Text);
  mainText.append('This is a block extension');

  const subtitleText = root.createComponent(Text);
  subtitleText.append(`Order ID for this product: ${api.order.id}`);

  const blockMainRow = root.createComponent(POSBlockRow);
  blockMainRow.append(mainText);

  const blockSubtitleRow = root.createComponent(POSBlockRow);
  blockSubtitleRow.append(subtitleText);
  block.append(blockMainRow);
  block.append(blockSubtitleRow);

  root.append(block);
});

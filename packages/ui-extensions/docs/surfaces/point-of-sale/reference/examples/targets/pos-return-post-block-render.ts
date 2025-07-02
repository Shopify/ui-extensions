import {
  POSBlock,
  POSBlockRow,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.return.post.block.render', (root, api) => {
  const block = root.createComponent(POSBlock, {
    action: {title: 'View return details', onPress: api.action.presentModal},
  });

  const mainText = root.createComponent(Text);
  mainText.append('Return block extension');

  const subtitleText = root.createComponent(Text);
  subtitleText.append(`Order ID: ${api.order.id}`);

  const blockMainRow = root.createComponent(POSBlockRow);
  blockMainRow.append(mainText);

  const blockSubtitleRow = root.createComponent(POSBlockRow);
  blockSubtitleRow.append(subtitleText);
  block.append(blockMainRow);
  block.append(blockSubtitleRow);

  root.append(block);
});

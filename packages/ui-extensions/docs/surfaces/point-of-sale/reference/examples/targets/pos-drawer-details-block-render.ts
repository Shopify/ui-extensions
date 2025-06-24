import {
  POSBlock,
  Text,
  POSBlockRow,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.drawer-details.block.render', (root, api) => {
  const block = root.createComponent(POSBlock, {
    action: {title: 'Open action', onPress: api.action.presentModal},
  });

  const mainText = root.createComponent(Text);
  mainText.append('This is a drawer details block extension');

  const subtitleText = root.createComponent(Text);
  subtitleText.append(`Drawer ID: ${api.drawer.id}`);

  const blockMainRow = root.createComponent(POSBlockRow);
  blockMainRow.append(mainText);

  const blockSubtitleRow = root.createComponent(POSBlockRow);
  blockSubtitleRow.append(subtitleText);
  block.append(blockMainRow);
  block.append(blockSubtitleRow);

  root.append(block);
});

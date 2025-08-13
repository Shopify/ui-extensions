import {Banner, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.purchase.post.banner.render', (root, api) => {
  const banner = root.createComponent(Banner, {
    title: 'This is a banner extension',
    variant: 'alert',
    visible: true,
  });

  root.append(banner);
});

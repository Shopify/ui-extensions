import {Banner, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.purchase.post.banner.render', (root, api) => {
  const banner = root.createComponent(Banner, {
    title: `Order ID for complete checkout: ${api.order.id}`,
    variant: 'alert',
    visible: true,
  });

  root.append(banner);
});

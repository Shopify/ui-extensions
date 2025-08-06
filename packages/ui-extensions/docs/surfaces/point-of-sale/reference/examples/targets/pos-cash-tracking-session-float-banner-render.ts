import {Banner, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cash-tracking-session-float.banner.render',
  (root) => {
    const banner = root.createComponent(Banner, {
      title: 'This is a banner extension',
      variant: 'information',
      visible: true,
    });

    root.append(banner);
  },
);

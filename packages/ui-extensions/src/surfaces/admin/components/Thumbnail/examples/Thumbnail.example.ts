import {extension, Thumbnail} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const thumbnail = root.createComponent(Thumbnail, {
    size: 'small',
    scaleType: 'fit',
    source: 'https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png',
    alt: 'Shopify',
  });

  root.appendChild(thumbnail);
  root.mount();
});

import {extension, Image} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const image = root.createComponent(Image, {
    source: 'https://cdn.shopify.com/YOUR_IMAGE_HERE',
  });

  root.appendChild(image);
});

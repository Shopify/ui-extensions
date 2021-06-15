import {extend, Image} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const image = root.createComponent(Image, {
    source: 'http://placekitten.com/300/300',
  });

  root.appendChild(image);
});

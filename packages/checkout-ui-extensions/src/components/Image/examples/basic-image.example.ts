import {extend, Image} from '@shopify/checkout-ui-extensions';

extend('Checkout::Feature::Render', (root) => {
  const image = root.createComponent(Image, {
    source: 'http://placekitten.com/300/300',
  });

  root.appendChild(image);
});

import {renderForShopifyDev} from './typedoc';

const paths = {
  inputRoot: '../checkout-web/packages/argo-checkout',
  packages: {
    JS: '../checkout-web/packages/argo-checkout',
    React: '../checkout-web/packages/argo-checkout-react',
  },
  outputRoot: '../shopify-dev/content/docs/checkout-extensions',
  shopifyDevUrl: '/docs/checkout-extensions',
};

renderForShopifyDev(paths);

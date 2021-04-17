import {renderForShopifyDev} from './typedoc/typedoc';

const paths = {
  inputRoot: '../checkout-web/packages/argo-checkout',
  outputRoot: '../shopify-dev/content/docs/checkout-extensions',
  packages: {
    JS: '../checkout-web/packages/argo-checkout',
    React: '../checkout-web/packages/argo-checkout-react',
  },
  shopifyDevUrl: '/docs/checkout-extensions',
};

renderForShopifyDev(paths);

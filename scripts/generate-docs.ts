import {renderForShopifyDev} from './typedoc/typedoc';

const paths = {
  inputRoot: '../checkout-web/packages/argo-checkout',
  outputRoot: '../shopify-dev/content/tools/argo-checkout',
  packages: {
    JS: '../checkout-web/packages/argo-checkout',
    React: '../checkout-web/packages/argo-checkout-react',
  },
  shopifyDevUrl: '/tools/argo-checkout',
};

renderForShopifyDev(paths);

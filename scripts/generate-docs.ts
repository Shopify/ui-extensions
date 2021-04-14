import {renderForShopifyDev} from './typedoc/typedoc';

const paths = {
  root: '../checkout-web/packages/argo-checkout',
  devDocsRoot: '../shopify-dev/content/tools/argo-checkout',
  packages: {
    JavaScript: '../checkout-web/packages/argo-checkout',
    React: '../checkout-web/packages/argo-checkout-react',
  },
  shopifyDevUrl: '/tools/argo-checkout',
};

renderForShopifyDev(paths);

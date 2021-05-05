import {components, extensionPoints} from './typedoc/shopify-dev-renderer';

const paths = {
  inputRoot: './packages/argo-admin',
  packages: {
    JavaScript: './packages/argo-admin',
    React: './packages/argo-admin-react',
  },
  outputRoot: '../shopify-dev/content/tools/argo-admin',
  shopifyDevUrl: '/tools/argo-admin',
};

components(paths);
extensionPoints(paths);
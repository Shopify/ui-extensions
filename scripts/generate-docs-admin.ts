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

components(paths, {
  title: 'Components for Argo Admin',
  frontMatterDescription: 'A list of components for Argo Admin.',
  description: `
Each component has general guidelines for usage as well as additional information regarding the behavior on certain platforms.

- 📱 denotes mobile specific information
- 🖥 denotes desktop specific information
  `,
});
extensionPoints(paths);
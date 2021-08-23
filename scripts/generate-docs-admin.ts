import {components, adminExtensionApi} from './typedoc/shopify-dev-renderer';

const paths = {
  inputRoot: './packages/admin-ui-extensions',
  packages: {
    JavaScript: './packages/admin-ui-extensions',
    React: './packages/admin-ui-extensions-react',
  },
  outputRoot: '../shopify-dev/content/api/admin-extensions',
  shopifyDevUrl: '/api/admin-extensions',
};

components(
  paths,
  {
    title: 'Components for Admin UI Extensions',
    frontMatterDescription: 'A list of components for Admin UI Extensions.',
    description: `
Each component has general guidelines for usage as well as additional information regarding the behavior on certain platforms.

- 📱 denotes mobile specific information
- 🖥 denotes desktop specific information
  `,
  },
  {
    compileExamples: false,
    visibility: 'visible',
  },
);

adminExtensionApi(paths, {
  componentsToSkip: ['ContainerApi', 'DataApi'],
});

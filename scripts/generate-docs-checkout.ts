import {extensionPoints, components, gettingStarted} from './typedoc/shopify-dev-renderer';

const paths = {
  inputRoot: './packages/argo-checkout',
  packages: {
    JS: './packages/argo-checkout',
    React: './packages/argo-checkout-react',
  },
  outputRoot: '../shopify-dev/content/beta/checkout-extensions',
  shopifyDevUrl: '/beta/checkout-extensions',
  shopifyDevAssets: '../shopify-dev/app/assets/images/api/checkout-extensions',
};

const componentsPageContent = {
  title: 'Components for checkout extensions',
  frontMatterDescription: 'A list of components for checkout extensions.',
  description: `Argo provides many powerful UI components that a
  [rendering extension](${paths.shopifyDevUrl}/extension-points#rendering) can
  use to build an interface. This UI is rendered natively by Shopify, so you
  can depend on it to be performant, accessible, and work in all of Checkout’s
  supported browsers. \n\nThe following components are available as part of Argo
  for Checkout, but make sure that you check the documentation for your
  [extension point](${paths.shopifyDevUrl}/extension-points#extension-points)
  to ensure the component is available in the extension points you are
  targeting.`,
}

extensionPoints(paths);
components(paths, componentsPageContent, {
  subcomponentMap: {ChoiceList: ['Choice'], FormLayout: ['FormLayoutGroup']},
  componentsToSkip: ['FormLayoutGroup', 'ListItem', 'Choice'],
  generateReadmes: true
});
gettingStarted(paths);

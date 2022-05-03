import {
  extensionPoints,
  components,
  gettingStarted,
} from './typedoc/shopify-dev-renderer';



const checkout = {
  inputRoot: './packages/checkout-ui-extensions',
  packages: {
    JS: './packages/checkout-ui-extensions',
    React: './packages/checkout-ui-extensions-react',
  },
  outputRoot: '../shopify-dev/content/beta/checkout-extensions',
  shopifyDevUrl: '/beta/checkout-extensions',
  shopifyDevAssets: '../shopify-dev/app/assets/images/api/checkout-extensions',
};

const componentsPageContent = (url: string, title = 'Checkout') => ({
  title: `Components for ${title} extensions`,
  frontMatterDescription: `A list of components for ${title} extensions.`,
  description: `Checkout UI Extensions provide many powerful UI components that a
  [rendering extension](${url}/extension-points/api#renderextension) can
  use to build an interface. This UI is rendered natively by Shopify, so you
  can depend on it to be performant, accessible, and work in all of Checkout’s
  supported browsers. \n\nThe following components are available as part of UI Extensions
  for Checkout, but make sure that you check the documentation for your
  [extension point](${url}/extension-points#extension-points)
  to ensure the component is available in the extension points you are
  targeting.`,
});

// Checkout docs
extensionPoints(checkout);
components(checkout, componentsPageContent(checkout.shopifyDevUrl), {
  subcomponentMap: {ChoiceList: ['Choice'], FormLayout: ['FormLayoutGroup']},
  componentsToSkip: ['FormLayoutGroup', 'ListItem', 'Choice'],
  generateReadmes: true,
});
gettingStarted(checkout);

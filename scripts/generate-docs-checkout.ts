import {
  extensionPoints,
  components,
  gettingStarted,
} from './typedoc/shopify-dev-renderer';

import type {Content} from './typedoc/shopify-dev-renderer';

const checkout = {
  inputRoot: './packages/checkout-ui-extensions',
  packages: {
    JS: './packages/checkout-ui-extensions',
    React: './packages/checkout-ui-extensions-react',
  },
  outputRoot: '../shopify-dev/content/api/checkout-extensions/checkout',
  shopifyDevUrl: '/api/checkout-extensions/checkout',
  shopifyDevAssets: '../shopify-dev/app/assets/images/api/checkout-extensions',
};

const componentsPageContent = (url: string, title = 'Checkout'): Content => ({
  title: `Components for ${title} extensions`,
  frontMatterDescription: `A list of components for ${title} extensions.`,
  // This will use a mardown file for the component index page, and will not auto-generate a list of components in the table of contents
  sourceFile: `${checkout.inputRoot}/documentation/components.md`,
  sourceFileStringReplacements: [
    // Replace relative in-repo link "../src/{component}" with "{shopifyDevUrl}/components/{component}"
    {
      find: /...src\/components\/(\w+)/g,
      replaceWith: (_match, p1) => `${url}/components/${p1}`.toLowerCase(),
    },
    // Specifically replace in-repo ./rendering.md link
    {
      find: /\.\/rendering.md/g,
      replaceWith: () => `${url}/extension-points/api#renderextension`,
    },
  ],
});

// Checkout docs
extensionPoints(checkout, {
  visibility: 'betaCheckoutExtensions',
});
components(checkout, componentsPageContent(checkout.shopifyDevUrl), {
  subcomponentMap: {ChoiceList: ['Choice'], FormLayout: ['FormLayoutGroup']},
  componentsToSkip: ['FormLayoutGroup', 'ListItem', 'Choice'],
  generateReadmes: true,
  visibility: 'betaCheckoutExtensions',
});
gettingStarted(checkout, {
  visibility: 'betaCheckoutExtensions',
});

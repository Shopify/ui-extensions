import {
  extensionPoints,
  components,
  gettingStarted,
} from './typedoc/shopify-dev-renderer';

import type {
  Content,
  PartialStaticContent,
} from './typedoc/shopify-dev-renderer';

const checkout = {
  inputRoot: './packages/checkout-ui-extensions',
  packages: {
    JS: './packages/checkout-ui-extensions',
    React: './packages/checkout-ui-extensions-react',
  },
  outputRoot: '../shopify-dev/content/api/checkout-extensions/checkout',
  shopifyDevUrl: '/api/checkout-extensions/checkout',
  shopifyDevAssetsPath:
    '../shopify-dev/app/assets/images/api/checkout-extensions/checkout',
  shopifyDevAssetsUrl: '/assets/api/checkout-extensions/checkout',
};

const componentsPageContent = (
  url: string,
  title = 'checkout UI',
): Content => ({
  title: `Components for ${title} extensions`,
  frontMatterDescription: `A list of components for ${title} extensions.`,
  // This will use a markdown file for the component index page, and will not auto-generate a list of components in the table of contents
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

const extensionPointsPageContent = (url: string): PartialStaticContent[] => [
  {sourceFile: `${checkout.packages.React}/documentation/hooks.md`},
];

// Checkout docs
extensionPoints(checkout, extensionPointsPageContent(checkout.shopifyDevUrl), {
  visibility: 'betaCheckoutExtensions',
});
components(checkout, componentsPageContent(checkout.shopifyDevUrl), {
  generateReadmes: true,
  visibility: 'betaCheckoutExtensions',
  conditionalDocs: [
    {
      sourceFile: `${checkout.inputRoot}/documentation/conditional-props.md`,
      propTypeNames: ['MaybeConditionalStyle'],
    },
  ],
  componentsToSkip: ['isConditionalStyle'],
});
gettingStarted(checkout, {
  visibility: 'betaCheckoutExtensions',
});

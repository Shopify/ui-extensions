import {
  extensionPoints,
  components,
  gettingStarted,
} from './typedoc/shopify-dev-renderer';

const postPurchase = {
  inputRoot: './packages/post-purchase-ui-extensions',
  packages: {
    JS: './packages/post-purchase-ui-extensions',
    React: './packages/post-purchase-ui-extensions-react',
  },
  outputRoot: '../shopify-dev/content/api/checkout-extensions',
  shopifyDevUrl: '/api/checkout-extensions',
  shopifyDevAssetsPath:
    '../shopify-dev/app/assets/images/api/checkout-extensions/post-purchase',
  shopifyDevAssetsUrl: '/assets/api/checkout-extensions/post-purchase',
};

const componentsPageContent = (url: string, title = 'Post-purchase') => ({
  title: `Components for ${title} extensions`,
  frontMatterDescription: `A list of components for ${title} extensions.`,
  description: `Post-purchase extensions provide many powerful UI components that a
  [rendering extension](${url}/extension-points/api#renderextension) can
  use to build an interface. This UI is rendered natively by Shopify, so you
  can depend on it to be performant, accessible, and work in all of checkout’s
  supported browsers. \n\nThe following components are available as part of
  post-purchase extensions for checkout, but make sure that you check the
  documentation for your [extension point](${url}/extension-points#extension-points)
  to ensure the component is available in the extension points you are
  targeting.`,
});

// Post-purchase docs
extensionPoints(postPurchase, [], {
  title: 'Post-purchase',
  visibility: 'visible',
});
components(
  postPurchase,
  componentsPageContent(postPurchase.shopifyDevUrl, 'Post-purchase'),
  {
    subcomponentMap: {ChoiceList: ['Choice'], FormLayout: ['FormLayoutGroup']},
    componentsToSkip: ['FormLayoutGroup', 'ListItem', 'Choice'],
    generateReadmes: true,
    visibility: 'visible',
  },
);
gettingStarted(postPurchase, {title: 'Post-purchase', visibility: 'visible'});

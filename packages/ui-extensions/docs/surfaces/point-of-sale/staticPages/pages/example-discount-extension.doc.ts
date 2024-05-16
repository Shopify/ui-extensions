import type {LandingTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../../reference/helpers/generateCodeBlock';

const examplePath = '../examples/discount-example';

const data: LandingTemplateSchema = {
  title: 'Build a discount extension',
  description:
    'Learn how to develop a scaffolded POS UI extension into a simple discount extension.',
  id: 'example-discount-extension',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'intro',
      title: 'Intro',
      sectionContent: `
This tutorial shows you how to use the \`pos.home.tile.render\` and \`pos.home.modal.render\` [extension targets](/docs/api/pos-ui-extensions/targets) to build a simple POS UI extension that quickly applies discounts to items in the cart.

You'll develop the scaffolded extension into a smart grid tile that becomes enabled when the cart reaches a total value. When tapped, the tile opens a modal that presents buttons representing available discounts. When tapped, these buttons apply a discount to the cart and present a toast for notification of success.

![POS UI Extensions Discount Example App](/assets/api/pos/pos-ui-extensions-discount-example.gif)
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'what-youll-learn',
      title: `What you'll learn`,
      sectionContent: `
In this tutorial, you'll learn how to do the following tasks:

- Enable or disable the tile based on cart contents.
- Add buttons to the modal that apply a discount and show a toast when tapped.
- Give your extension a useful description.
- Deploy your extension to Shopify, create a version, and publish.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'requirements',
      title: 'Requirements',
      sectionContent: `
- You've completed the [Getting started with POS UI extensions](/docs/api/pos-ui-extensions/getting-started) guide.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'sample-code',
      title: 'Sample code',
      sectionContent: `
The sample code imports some extension components to build the UI. The tile contains the logic to control its enablement based on the cart subtotal. The modal contains the logic to apply discounts based on button tap.

You can copy and paste the following code into your index file. You can also update your extension's configuration file following the \`shopify.extension.toml\` example.

The rest of the tutorial walks through this sample code step-by-step.
      `,
      codeblock: {
        title: 'Discount extension',
        tabs: [
          {
            title: 'Tile (React)',
            code: `${examplePath}/tile.tsx`,
            language: 'tsx',
          },
          {
            title: 'Modal (React)',
            code: `${examplePath}/modal.tsx`,
            language: 'tsx',
          },
          {
            title: 'Tile (TS)',
            code: `${examplePath}/tile.ts`,
            language: 'ts',
          },
          {
            title: 'Modal (TS)',
            code: `${examplePath}/modal.ts`,
            language: 'ts',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'step-1-enable-the-tile',
      title: 'Step 1: Enable or disable the tile based on cart contents',
      sectionContent: `
You can enable or disable the tile based on cart contents by accessing its \`subscribable\`. In the tile code, initialize state based on the \`initial\` value of the \`subscribable\`.
      `,
      codeblock: generateCodeBlock(
        'Enable the tile based on cart contents',
        'discount-example',
        '1-enable-the-tile',
      ),
    },
    {
      type: 'Generic',
      anchorLink: 'step-2-subscribe-to-cart',
      title: 'Step 2: Subscribe to cart changes',
      sectionContent: `In the tile code, subscribe to cart changes and mutate state based on the updated cart.`,
      codeblock: generateCodeBlock(
        'Subscribe to cart changes',
        'discount-example',
        '2-subscribe-to-cart',
      ),
    },
    {
      type: 'Generic',
      anchorLink: 'step-3-add-buttons',
      title:
        'Step 3: Add buttons to the modal that apply a discount and display a toast when tapped',
      sectionContent: `
You can add buttons to the modal that trigger some action on press.

Create the buttons on the modal. Note that most components belong in a ScrollView.
      `,
      codeblock: generateCodeBlock(
        'Add buttons to the modal',
        'discount-example',
        '3-add-buttons',
      ),
    },
    {
      type: 'Generic',
      anchorLink: 'step-4-define-onpress',
      title: 'Step 4: Define onPress',
      sectionContent: `
Define an \`onPress\` function to apply the discount and show the toast.
      `,
      codeblock: generateCodeBlock(
        'Define onPress',
        'discount-example',
        '4-define-onpress',
      ),
    },
    {
      type: 'Generic',
      anchorLink: 'step-5-give-description',
      title: 'Step 5: Give your extension a useful description',
      sectionContent: `
Your extension's description will be visible to the merchant when they discover and add it to their POS.
![Extension description](/assets/apps/pos/ui-ext-description.png)
When you generate a POS UI Extension from Shopify CLI, the extension description defaults to the name of the extension. You can update the description in the generated \`toml\` file (\`shopify.extension.toml\`).
      `,
      codeblock: {
        title: 'Description configuration',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: `${examplePath}/shopify.extension.toml`,
            language: 'toml',
          },
        ],
      },
      sectionNotice: [
        {
          title: 'Note',
          type: 'note',
          sectionContent:
            '`name` is an internal value that is visible in the Partner Dashboard as the title of an extension on the page that displays the extensions list.',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'step-6-deploy-release',
      title: 'Step 6: Deploy and release',
      sectionContent: `
Refer to [Deploy app extensions](/docs/apps/deployment/app-versions) for more information.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'next-steps',
      title: 'Next steps',
      sectionContent: `
- [Debug](/docs/apps/pos/ui-extensions/debugging) POS UI Extension.

- Learn more about building with POS UI extensions by exploring the [POS UI extension reference](/docs/api/pos-ui-extensions).
      `,
    },
  ],
};

export default data;

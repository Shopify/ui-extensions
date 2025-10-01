import {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Admin UI extensions',
  description:
    'Admin UI extensions make it possible to surface contextual app functionality within the Shopify Admin interface.',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  id: 'admin-extensions',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'overview',
      title: 'Overview',
      image: 'action-extension-example.gif',
      sectionContent: 'Extend the Shopify Admin with UI Extensions.',
      sectionCard: [
        {
          name: 'Get started building your first admin extension',
          subtitle: 'Tutorial',
          url: '/docs/apps/admin/admin-actions-and-blocks/build-an-admin-action',
          type: 'tutorial',
        },
        {
          subtitle: 'Component APIs',
          name: 'See all available components',
          url: '/docs/api/admin-extensions/components',
          type: 'blocks',
        },
        {
          subtitle: 'Reference',
          name: 'View a list of available extension targets',
          url: '/docs/api/admin-extensions/2025-10-rc/extension-targets',
          type: 'app',
        },
        {
          subtitle: 'Network Features',
          name: 'Learn about the network features available to admin extensions',
          url: '/docs/api/admin-extensions/2025-10-rc/network-features',
          type: 'globe',
        },
        {
          subtitle: 'Using Forms',
          name: 'Use the Form component to integrate with the contextual save bar of the resource page',
          url: '#using-forms',
          type: 'tool',
        },
        {
          subtitle: 'Picking resources',
          name: 'Prompt the user to select resources',
          url: '#picking-resources',
          type: 'tool',
        },
        {
          subtitle: 'Figma kit',
          name: 'Use the Figma kit to design your extension',
          url: 'https://www.figma.com/community/file/1554895871000783188/polaris-ui-kit-community',
          type: 'tool',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'getting-started',
      sectionContent:
        'Use the [Shopify CLI](/docs/api/shopify-cli) to [generate a new extension](https://shopify.dev/apps/tools/cli/commands#generate-extension) within your app.\n\n' +
        'If you already have a Shopify app, you can skip right to the last command shown here.\n\n' +
        'Make sure you’re using Shopify CLI `v3.85.3` or higher. You can check your version by running `shopify version`.',
      title: 'Getting Started',
      codeblock: {
        title: 'Generate an extension',
        tabs: [
          {
            code: './examples/getting-started.sh',
            language: 'bash',
            title: 'CLI',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'Scaffolded with Preact',
      sectionContent: `UI Extensions are scaffolded with [Preact](https://preactjs.com/) by default.
      \nThis means that you can use Preact patterns and principles within your extension. Since Preact is included as a standard dependency, you have access to all of its features including [hooks](https://preactjs.com/guide/v10/hooks/) like \`useState\` and \`useEffect\` for managing component state and side effects.
      \nYou can also use [Preact Signals](https://preactjs.com/guide/v10/signals) for reactive state management, and take advantage of standard web APIs just like you would in a regular Preact application.`,
      anchorLink: 'scaffolded-with-preact',
      codeblock: {
        title: 'Scaffolded with Preact',
        tabs: [
          {
            code: './examples/scaffolded-with-preact.jsx',
            language: 'jsx',
            title: 'JSX',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'Handling events',
      sectionContent: `Handling events in UI extensions are the same as you would handle them in a web app. You can use the \`addEventListener\` method to listen for events on the components or use the \`on[event]\` property to listen for events from the components.
        \n\nWhen using Preact, event handlers can be registered by passing props beginning with \`on\`, and the event handler name is case-insensitive. For example, the JSX \`<s-button onClick={fn}>\` registers \`fn\` as a "click" event listener on the button.`,
      anchorLink: 'handling-events',
      codeblock: {
        title: 'Handling events',
        tabs: [
          {
            code: './examples/handling-events.jsx',
            language: 'jsx',
            title: 'JSX',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'Using Forms',
      sectionContent: `When building a Block extension you may use the [Form component](https://shopify.dev/docs/api/admin-extensions/latest/components/forms/form) to integrate with the contextual save bar of the resource page. The Form component provides a way to manage form state and submit data to your app's backend or directly to Shopify using Direct API access.\n\nWhenever an input field is changed, the Form component will automatically update the dirty state of the resource page. When the form is submitted or reset the relevant callback in the form component will get triggered.\n\nUsing this, you can control what defines a component to be dirty by utilizing the Input's defaultValue property.\n\nRules:\n\n- When the defaultValue is set, the component will be considered dirty if the value of the input is different from the defaultValue.You may update the defaultValue when the form is submitted to reset the dirty state of the form.\n\n- When the defaultValue is not set, the component will be considered dirty if the value of the input is different from the initial value or from the last dynamic update to the input's value that wasn't triggered by user input.

        Note: In order to trigger the dirty state, each input must have a name attribute.
        `,
      anchorLink: 'using-forms',
      codeblock: {
        title: "Trigger the Form's dirty state",
        tabs: [
          {
            code: './examples/form-default-value.jsx',
            language: 'tsx',
            title: 'Using `defaultValue`',
          },
          {
            code: './examples/form-implicit-default.jsx',
            language: 'tsx',
            title: 'Using implicit default',
          },
        ],
      },
    },
    {
      type: 'GenericAccordion',
      title: 'Picking Resources',
      sectionContent:
        "Use the Resource Picker and Picker API's to allow users to select resources for your extension to use.",
      anchorLink: 'picking-resources',
      accordionContent: [
        {
          title: 'Resource Picker',
          description:
            'Use the `resourcePicker` API to display a search-based interface to help users find and select one or more products, collections, or product variants, and then return the selected resources to your extension. Both the app and the user must have the necessary permissions to access the resources selected.',
          image: 'resource-picker.png',
          codeblock: {
            title: 'resourcePicker',
            tabs: [
              {
                title: 'Selecting a product',
                language: 'tsx',
                code: './examples/resource-picker-product.jsx',
              },
            ],
          },
        },
        {
          title: 'Picker',
          description:
            'Use the `picker` API to display a search-based interface to help users find and select one or more custom data types that you provide, such as product reviews, email templates, or subscription options.',
          image: 'picker.png',
          codeblock: {
            title: 'picker',
            tabs: [
              {
                title: 'Selecting an email template',
                language: 'tsx',
                code: './examples/picker-email-template.jsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Generic',
      title: 'Deploying',
      anchorLink: 'deploying',
      sectionContent:
        'Use the Shopify CLI to [deploy your app and its extensions](https://shopify.dev/docs/apps/deployment/extension).',
      codeblock: {
        title: 'Deploy an extension',
        tabs: [
          {
            code: './examples/deploy.sh',
            language: 'bash',
            title: 'CLI',
          },
        ],
      },
    },
  ],
};

export default data;

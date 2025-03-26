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
          url: '/docs/api/admin-extensions/api/extension-targets',
          type: 'app',
        },
        {
          subtitle: 'Network Features',
          name: 'Learn about the network features available to admin extensions',
          url: '/docs/api/admin-extensions/api/network-features',
          type: 'globe',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'getting-started',
      sectionContent:
        'Use the Shopify CLI to [generate a new extension](https://shopify.dev/apps/tools/cli/commands#generate-extension) within your app.\n\nIf you already have a Shopify app, you can skip right to the last command shown here.',
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
      sectionContent:
        'UI Extensions are scaffolded with Preact by default. This means that you can use Preact patterns and principles within your extension.',
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
      sectionContent:
        'Handling events in admin extensions are the same as you would handle them in a web app. You can use the `addEventListener` method to listen for events on the components or use the `on[event]` prop to listen for events from the components.',
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
      sectionContent:
        "When building a Block extension you may use the [Form component](https://shopify.dev/docs/api/admin-extensions/latest/components/forms/form) to integrate with the contextual save bar of the resource page. The Form component provides a way to manage form state and submit data to your app's backend or directly to Shopify using Direct API access.\n\nWhenever an input field is changed, the Form component will automatically update the dirty state of the resource page. When the form is submitted or reset the relevant callback in the form component will get triggered.\n\nUsing this, you can control what defines a component to be dirty by utilizing the Input's defaultValue property.\n\nRules:\n\n- When the defaultValue is set, the component will be considered dirty if the value of the input is different from the defaultValue.You may update the defaultValue when the form is submitted to reset the dirty state of the form.\n\n- When the defaultValue is not set, the component will be considered dirty if the value of the input is different from the initial value or from the last dynamic update to the input's value that wasn't triggered by user input.",
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
      title: 'Custom Protocols',
      sectionContent:
        'Custom protocols make it easier to navigate to common locations, and construct URLs.',
      anchorLink: 'custom-protocols',
      accordionContent: [
        {
          title: 'Shopify Protocol',
          description:
            'Use the `shopify:admin` protocol when you want to construct a URL with a root of the Shopify Admin.',
          codeblock: {
            title: 'shopify:admin',
            tabs: [
              {
                title: 'Link to Product Page',
                language: 'tsx',
                code: './examples/link-to-product-page.jsx',
              },
              {
                title: 'Fetch data',
                language: 'ts',
                code: './examples/fetch-data.js',
              },
            ],
          },
        },
        {
          title: 'Extension Protocol',
          description:
            'Triggers an action extension from a block extension using the `extension:` protocol. The `extensionTarget` is the target of the action extension. The handle is the handle of the action extension that will be opened.',
          codeblock: {
            title: 'extension:',
            tabs: [
              {
                title: 'Trigger Action Extension from a Block extension',
                language: 'tsx',
                code: './examples/link-to-action.jsx',
              },
            ],
          },
        },
        {
          title: 'Relative Urls',
          description:
            'Relative urls are relative to your app and are useful when you want to link to a route within your app. This works for both embedded and non-embedded apps.',
          codeblock: {
            title: '/relative/urls',
            tabs: [
              {
                title: 'Link to route in your app',
                language: 'tsx',
                code: './examples/link-to-route.jsx',
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
    {
      type: 'Generic',
      title: 'Security',
      anchorLink: 'security',
      sectionContent:
        'UI Extensions run on a different origin than the Shopify Admin. For network calls to succeed, your server must support [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for the origin `https://extensions.shopifycdn.com`.\n\nIf you have a custom [`Access-Control-Allow-Origin` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) set, you must include `https://extensions.shopifycdn.com` in the list of allowed origins.\n\nIf you are using the [Shopify App Remix Template](https://github.com/Shopify/shopify-app-template-remix), this is done automatically for you.',
    },
  ],
};

export default data;

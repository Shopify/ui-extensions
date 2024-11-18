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
          subtitle: 'App authentication',
          name: "Make authenticated requests to your app's backend",
          url: '#app-authentication',
          type: 'tool',
        },
        {
          subtitle: 'Using Forms',
          name: 'Use the Form component to integrate with the contextual save bar of the resource page',
          url: '#using-forms',
          type: 'tool',
        },
        {
          subtitle: 'Direct API access',
          name: 'Access the Shopify GraphQL API directly',
          url: '#direct-api-access',
          type: 'tool',
        },
        {
          subtitle: 'Picking resources',
          name: 'Display resource pickers to select resources',
          url: '#picking-resources',
          type: 'tool',
        },
        {
          subtitle: 'Custom protocols',
          name: 'Easily construct URLs to navigate to common locations',
          url: '#custom-protocols',
          type: 'gear',
        },
        {
          subtitle: 'UI reference',
          name: 'Figma UI Kit',
          url: 'https://www.figma.com/community/file/1265417558571498993',
          type: 'figma',
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
      title: 'App Authentication',
      sectionContent:
        "Admin UI extensions can also make authenticated calls to your app's backend. When you use `fetch()` to make a request to your app's configured auth domain or any of its subdomains, an `Authorization` header is automatically added with a Shopify [OpenID Connect ID Token](https://shopify.dev/docs/api/app-bridge-library/reference/id-token). There's no need to manually manage ID tokens.\n\nRelative URLs passed to `fetch()` are resolved against your app's `app_url`. This means if your app's backend is on the same domain as your `app_url`, you can make requests to it using `fetch('/path')`.\n\nIf you need to make requests to a different domain, you can use the [`auth.idToken()` method](/docs/api/admin-extensions/api/standard-api#standardapi-propertydetail-auth) to retrieve the ID token and manually add it to your request headers.",
      anchorLink: 'app-authentication',
      codeblock: {
        title: "Make requests to your app's backend",
        tabs: [
          {
            code: './examples/authenticated-fetch.jsx',
            language: 'tsx',
            title: 'Get Product Data',
          },
          {
            code: './examples/custom-authenticated-fetch.jsx',
            language: 'tsx',
            title: 'Get Data from a different domain',
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
      type: 'Generic',
      title: 'Direct API access',
      sectionContent:
        "You can make Shopify Admin API requests directly from your extension using the [query API](/docs/api/admin-extensions/api/standard-api#standardapi-propertydetail-query) or the standard [web fetch API](https://developer.mozilla.org/en-US/docs/Web/API/fetch)!\n\nAny `fetch()` calls from your extension to Shopify's Admin GraphQL API are automatically authenticated by default. These calls are fast too, because Shopify handles requests directly.\n\nDirect API requests use [online access](https://shopify.dev/docs/apps/build/authentication-authorization/access-token-types/online-access-tokens) mode by default. If you want to use [offline access](https://shopify.dev/docs/apps/build/authentication-authorization/access-token-types/offline-access-tokens) mode, you can set the `direct_api_mode` property to `offline` in your [app TOML file](/docs/apps/tools/cli/configuration#admin).\n\nNote: Direct API can't be used to manage storefront access tokens.",
      anchorLink: 'direct-api-access',
      codeblock: {
        title: 'Query Shopify data',
        tabs: [
          {
            code: './examples/direct-api-fetch.jsx',
            language: 'tsx',
            title: 'Fetch Product data',
          },
          {
            code: './examples/direct-api-query.jsx',
            language: 'tsx',
            title: 'Query Product data',
          },
        ],
      },
      sectionCard: [
        {
          name: "Direct API can't be used to manage storefront access tokens.",
          subtitle: 'Note',
          url: '/docs/api/admin-extensions#direct-api-access',
          type: 'information',
        },
        {
          name: 'Learn more about access scopes',
          subtitle: 'Developer guide',
          url: '/docs/api/usage/access-scopes',
          type: 'information',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'Picking Resources',
      sectionContent:
        'Use the Resource Picker and Picker APIs to allow users to select resources for your extension to use. These APIs are available for use in [Block Extensions](/docs/api/admin-extensions/unstable/api/block-extension-api).',
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
          title: 'App Protocol',
          description:
            'Use the `app:` protocol to construct a URL for your app. Shopify will handle constructing the base URL for your app. This works for both embedded and non-embedded apps.',
          codeblock: {
            title: 'app:',
            tabs: [
              {
                title: 'Link to Settings',
                language: 'tsx',
                code: './examples/link-to-settings.jsx',
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

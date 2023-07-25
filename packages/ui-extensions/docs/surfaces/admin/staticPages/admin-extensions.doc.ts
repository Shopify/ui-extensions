/* eslint-disable no-template-curly-in-string */
import {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Admin UI extensions',
  featureFlag: 'admin_extensibility',
  description:
    "Admin UI extensions enable you to add your app's functionality to the Shopify Admin. It allows you to integrate your app into the Shopify Admin in a more meaningful way.",
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
      anchorLink: 'actionExtensions',
      title: 'Overview',
      image: 'action-extension-example.gif',
      sectionContent: 'Extend the Shopify Admin with UI Extensions.',
      sectionNotice: [
        {
          title: 'Developer preview',
          sectionContent:
            'Admin UI action and block extensions are currently in developer preview. You can only render them while developing locally on a development store.',
          type: 'beta',
        },
      ],
      sectionCard: [
        {
          name: 'Get started building your first admin extension',
          subtitle: 'Tutorial',
          url: '#gettingStarted',
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
          subtitle: 'Direct API access',
          name: 'Access the Shopify GraphQL API directly',
          url: '#directAPIAccess',
          type: 'tool',
        },
        {
          subtitle: 'Custom protocols',
          name: 'Easily construct URLs to navigate to common locations',
          url: '#directAPIAccess',
          type: 'gear',
        },
        {
          subtitle: 'UI reference',
          name: 'Figma UI Kit (coming soon)',
          url: '#',
          type: 'figma',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'gettingStarted',
      sectionContent:
        'Scaffolding an extension for the title and Use Shopify CLI to [generate a new extension](https://shopify.dev/apps/tools/cli/commands#generate-extension) in the directory of your app.',
      title: 'Getting Started',
      codeblock: {
        title: 'Generate an extension',
        tabs: [
          {
            code: './examples/getting-started.ts',
            language: 'bash',
            title: 'CLI',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'Direct API access',
      sectionContent:
        "Make requests to Shopify directly from your extension, simply use `fetch`! The access scopes you have in your extension are the same as the access scopes you have in your app. If you need to make a request to a resource that requires a different access scope, update your app's access scopes.",
      anchorLink: 'directAPIAccess',
      codeblock: {
        title: 'Query Shopify data',
        tabs: [
          {
            code: './examples/direct-api.tsx',
            language: 'tsx',
            title: 'Get Product Data',
          },
        ],
      },
      sectionCard: [
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
      title: 'Custom Protocols',
      sectionContent:
        'Custom protocols make it easier to navigate to common locations, and construct URLs.',
      anchorLink: 'customProtocols',
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
                code: '<Link to="shopify:admin/products/1234567890" />',
              },
              {
                title: 'Fetch data',
                language: 'ts',
                code: `fetch("shopify:admin/api/graphql.json", {
  method: "POST",
  body: JSON.stringify(simpleProductQuery),
});`,
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
                title: 'Link to Product Page',
                language: 'tsx',
                code: '<Link to="app:settings/advanced" />',
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
                code: '<Link to={`extension:${extension.handle}/${extensionTarget}`} />',
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
                code: '<Link to={`/reviews/${product.id}`} />',
              },
            ],
          },
        },
      ],
    },
  ],
};

export default data;

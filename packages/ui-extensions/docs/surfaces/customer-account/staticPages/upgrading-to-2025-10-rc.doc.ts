import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'Upgrading to 2025-10',
  description: `This guide describes how to upgrade your customer account UI extension to API version \`2025-10\` and adopt [Polaris](/beta/next-gen-dev-platform/polaris) web components.`,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm the id matches the reference name.
  id: 'upgrading-to-2025-10-rc',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'update-api-version',
      title: 'Update API version',
      sectionContent:
        'Set the API version to `2025-10` in `shopify.extension.toml` to use Polaris web components.',
      codeblock: {
        title: 'shopify.extension.toml',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/upgrading-to-2025-10-rc/shopify.extension-new.toml',
            language: 'toml',
          },
        ],
      },
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'adjust-dependencies',
      title: 'Adjust package dependencies',
      sectionContent: `
As of \`2025-10\`, Shopify recommends Preact for UI extensions. Update the dependencies in your \`package.json\` file and re-install.
`,
      accordionContent: [
        {
          title: 'New dependencies with Preact',
          description: '',
          codeblock: {
            title: 'New dependencies with Preact',
            tabs: [
              {
                title: 'package.json',
                code: './examples/upgrading-to-2025-10-rc/package-json-new.json',
                language: 'json',
              },
            ],
          },
        },
        {
          title: 'Previous dependencies with React',
          description: '',
          codeblock: {
            title: 'Previous dependencies with React',
            tabs: [
              {
                title: 'package.json',
                code: './examples/upgrading-to-2025-10-rc/package-json-old-react.json',
                language: 'json',
              },
            ],
          },
        },
        {
          title: 'Previous dependencies with JavaScript',
          description: '',
          codeblock: {
            title: 'Previous dependencies with JavaScript',
            tabs: [
              {
                title: 'package.json',
                code: './examples/upgrading-to-2025-10-rc/package-json-old-js.json',
                language: 'json',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'make-typescript-adjustments',
      title: 'Make TypeScript adjustments',
      sectionContent: `
These steps make TypeScript aware of the new global \`shopify\` object. Skip these steps if your app was not built using TypeScript.
`,
      accordionContent: [
        {
          title: "Update your extension's tsconfig.json",
          description:
            "Update your extension config at a path like `extensions/{extension-name}/tsconfig.json`. You do **not** need to change your app's root `tsconfig.json` file.",
          codeblock: {
            title: "Update your extension's tsconfig.json",
            tabs: [
              {
                title: 'New tsconfig.json',
                code: './examples/upgrading-to-2025-10-rc/new-tsconfig.example.json',
                language: 'json',
              },
              {
                title: 'Old tsconfig.json',
                code: './examples/upgrading-to-2025-10-rc/old-tsconfig.example.json',
                language: 'json',
              },
            ],
          },
        },
        {
          title:
            'Generate type definition file to support new global shopify object',
          description:
            'These commands generate a `shopify.d.ts` file in your extension directory.',
          codeblock: {
            title: 'Support new global shopify object',
            tabs: [
              {
                title: 'CLI',
                code: './examples/upgrading-to-2025-10-rc/support-new-shopify-global.example.bash',
                language: 'bash',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'migrate-api-calls',
      title: 'Migrate API calls',
      sectionContent:
        "Instead of accessing APIs from a callback parameter or React hook, access them from the global `shopify` object. Here's an example of migrating the Cart Line Target API call.",
      accordionContent: [
        {
          title: 'New API calls in Preact',
          description: '',
          codeblock: {
            title: 'New API calls in Preact',
            tabs: [
              {
                title: 'Preact',
                code: './examples/upgrading-to-2025-10-rc/apis-new.jsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous API calls in React',
          description: '',
          codeblock: {
            title: 'Previous API calls in React',
            tabs: [
              {
                title: 'React',
                code: './examples/upgrading-to-2025-10-rc/apis-old-react.jsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous API calls in JavaScript',
          description: '',
          codeblock: {
            title: 'Previous API calls in JavaScript',
            tabs: [
              {
                title: 'JavaScript',
                code: './examples/upgrading-to-2025-10-rc/apis-old-js.jsx',
                language: 'tsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'migrate-to-polaris-web-components',
      title: 'Migrate to Polaris web components',
      sectionContent:
        'Polaris web components are exposed as custom HTML elements. Update your React or JavaScript components to custom elements.',
      accordionContent: [
        {
          title: 'New components in Preact',
          description: '',
          codeblock: {
            title: 'New components in Preact',
            tabs: [
              {
                title: 'Preact',
                code: './examples/upgrading-to-2025-10-rc/components-new.jsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous components in React',
          description: '',
          codeblock: {
            title: 'Previous components in React',
            tabs: [
              {
                title: 'React',
                code: './examples/upgrading-to-2025-10-rc/components-old-react.jsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous components in JavaScript',
          description: '',
          codeblock: {
            title: 'Previous components in JavaScript',
            tabs: [
              {
                title: 'JavaScript',
                code: './examples/upgrading-to-2025-10-rc/components-old-js.jsx',
                language: 'tsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Markdown',
      anchorLink: 'mapping-legacy-components-to-polaris-web',
      title: 'Mapping Legacy components to Polaris web',
      sectionContent: `
|   **Legacy Component**   |   **Polaris Web Component**   |   **Migration Notes**   |
| :----------------------: | :-------------------------------: | :---------------------: |
|   \`Avatar\`                |   [Avatar](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/avatar)   |   Available today   |
|                             |  [ButtonGroup](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/buttongroup)   |   Available today   |
|   \`Card\`                  |  [Section](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/section)   |   Available today   |
|   \`CustomerAccountAction\`  |  [CustomerAccountAction](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/customeraccountaction)   |   Available today       |
|   \`ImageGroup\`            |  [ImageGroup](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/imagegroup)                         |   Available today       |
|   \`Menu\`                  |  [Menu](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/menu)    |   Available today   |
|   \`Page\`                  |  [Page](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/page)    |   Available today |
|   \`ResourceItem\`          |                                |   Use [Section](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/section)   |
`,
    },
    {
      type: 'Generic',
      anchorLink: 'additional-components',
      title: 'Additional components',
      sectionContent:
        'In addition to the components above, you can also use Polaris web components in the Checkout library to build customer account UI extensions.',
      sectionCard: [
        {
          type: 'blocks',
          name: 'Checkout components',
          subtitle: 'More Polaris web components',
          url: '/docs/api/checkout-ui-extensions/polaris-web-components',
        },
      ],
    },
  ],
};

export default data;

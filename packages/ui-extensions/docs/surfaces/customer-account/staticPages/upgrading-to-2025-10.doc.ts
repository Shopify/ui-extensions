import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'Upgrading to 2025-10',
  description: `This guide describes how to upgrade your customer account UI extension to API version \`2025-10\` and adopt web components.`,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm the id matches the reference name.
  id: 'upgrading-to-2025-10',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'update-api-version',
      title: 'Update API version',
      sectionContent:
        'Set the API version to `2025-10` in `shopify.extension.toml` to use web components.',
      codeblock: {
        title: 'shopify.extension.toml',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/upgrading-to-2025-10/shopify.extension-new.toml',
            language: 'toml',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'file-size-limit',
      title: 'File size limit',
      sectionContent:
        'As of `2025-10`, UI extensions are subject to a **64 KB file size limit** upon deployment. This limit applies to the compiled extension bundle and is enforced to ensure fast loading times and optimal performance for customers.',
      sectionNotice: [
        {
          title: 'Important',
          sectionContent: `
If your extension exceeds 64 KB, deployment will fail.
`,
          type: 'warning',
        },
      ],
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
                code: './examples/upgrading-to-2025-10/package-json-new.json',
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
                code: './examples/upgrading-to-2025-10/package-json-old-react.json',
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
                code: './examples/upgrading-to-2025-10/package-json-old-js.json',
                language: 'json',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'update-typescript-configuration',
      title: 'TypeScript Configuration',
      sectionContent: `
Get full IntelliSense and auto-complete support by adding a config file for your extension at \`extensions/{extension-name}/tsconfig.json\`. You do **not** need to change your app's root \`tsconfig.json\` file.
      `,
      accordionContent: [
        {
          title: 'New tsconfig.json',
          description: '',
          codeblock: {
            title: 'New tsconfig.json',
            tabs: [
              {
                title: 'tsconfig.json',
                code: './examples/upgrading-to-2025-10/new-tsconfig.example.json',
                language: 'json',
              },
            ],
          },
        },
        {
          title: 'Old tsconfig.json',
          description: '',
          codeblock: {
            title: 'Old tsconfig.json',
            tabs: [
              {
                title: 'tsconfig.json',
                code: './examples/upgrading-to-2025-10/old-tsconfig.example.json',
                language: 'json',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'upgrading-shopify-cli',
      title: 'Upgrade the Shopifiy CLI',
      sectionContent: `
The new CLI adds supoort for building 2025-10 extensions.

The \`shopify app dev\` command runs your app and also generates a \`shopify.d.ts\` file in your extension directory, adding support for the new global \`shopify\` object.
      `,
      codeblock: {
        title: 'Support new global shopify object',
        tabs: [
          {
            title: 'CLI',
            code: './examples/upgrading-to-2025-10/support-new-shopify-global.example.bash',
            language: 'bash',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'eslint-configuration',
      title: 'Optional ESLint configuration',
      sectionContent: `
If your app is using ESLint, update your configuration to include the new global \`shopify\` object.
        `,
      codeblock: {
        title: '.eslintrc.cjs',
        tabs: [
          {
            code: './examples/eslint-configuration.example.ts',
            language: 'js',
          },
        ],
      },
      initialLanguage: 'js',
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
                code: './examples/upgrading-to-2025-10/apis-new.jsx',
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
                code: './examples/upgrading-to-2025-10/apis-old-react.jsx',
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
                code: './examples/upgrading-to-2025-10/apis-old-js.jsx',
                language: 'tsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'migrate-to-web-components',
      title: 'Migrate to web components',
      sectionContent:
        'Web components are exposed as custom HTML elements. Update your React or JavaScript components to custom elements.',
      accordionContent: [
        {
          title: 'New components in Preact',
          description: '',
          codeblock: {
            title: 'New components in Preact',
            tabs: [
              {
                title: 'Preact',
                code: './examples/upgrading-to-2025-10/components-new.jsx',
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
                code: './examples/upgrading-to-2025-10/components-old-react.jsx',
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
                code: './examples/upgrading-to-2025-10/components-old-js.jsx',
                language: 'tsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Markdown',
      anchorLink: 'mapping-legacy-components-to-web',
      title: 'Mapping legacy components to web components',
      sectionContent: `
|   **Legacy Component**   |   **Web Component**   |   **Migration Notes**   |
| :----------------------: | :-------------------------------: | :---------------------: |
|   \`Avatar\`                |   [Avatar](/api/customer-account-ui-extensions/web-components/media/avatar)   |   Available today   |
|                             |  [ButtonGroup](/api/customer-account-ui-extensions/web-components/actions/buttongroup)   |   Available today   |
|   \`Card\`                  |  [Section](/api/customer-account-ui-extensions/web-components/structure/section)   |   Available today   |
|   \`CustomerAccountAction\`  |  [CustomerAccountAction](/api/customer-account-ui-extensions/web-components/actions/customeraccountaction)   |   Available today       |
|   \`ImageGroup\`            |  [ImageGroup](/api/customer-account-ui-extensions/web-components/media/imagegroup)                         |   Available today       |
|   \`Menu\`                  |  [Menu](/api/customer-account-ui-extensions/web-components/actions/menu)    |   Available today   |
|   \`Page\`                  |  [Page](/api/customer-account-ui-extensions/web-components/structure/page)    |   Available today |
|   \`ResourceItem\`          |                                |   Removed. Use [Section](/api/customer-account-ui-extensions/web-components/structure/section)   |
`,
    },
    {
      type: 'Generic',
      anchorLink: 'additional-components',
      title: 'Additional components',
      sectionContent:
        'In addition to the components above, you can also use web components in the Checkout library to build customer account UI extensions.',
      sectionCard: [
        {
          type: 'blocks',
          name: 'Checkout components',
          subtitle: 'More web components',
          url: '/docs/api/checkout-ui-extensions/web-components',
        },
      ],
    },
  ],
};

export default data;

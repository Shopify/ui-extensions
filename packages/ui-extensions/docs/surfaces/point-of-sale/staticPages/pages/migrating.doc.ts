import type {LandingTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../../reference/helpers/generateCodeBlock';

const examplePath = '../examples/migrating';

const data: LandingTemplateSchema = {
  title: 'Migrating',
  description:
    'Migrate your POS UI Extension to use the latest unified ui-extension package.',
  id: 'migrating',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'overview',
      title: 'Overview',
      sectionNotice: [
        {
          type: 'warning',
          title: 'Minimum CLI Version',
          sectionContent: 'Migration requires a minimum CLI version of 3.64.0.',
        },
      ],
      sectionContent: `
POS UI Extensions are moving to the newer \`@shopify/ui-extensions\` package, shared with [Checkout UI Extensions](https://shopify.dev/docs/api/checkout-ui-extensions) and [Admin UI Extensions](https://shopify.dev/docs/api/admin-extensions). This will allow your extensions to use the same package regardless of the surface they extend, and for a single extension to implement multiple targets across different surfaces of Shopify more easily.

\`@shopify/retail-ui-extensions\` and \`@shopify/retail-ui-extensions-react\` are deprecated. They are now maintained as part of \`@shopify/ui-extensions\` and \`@shopify/ui-extensions-react\`. This guide explains how to migrate from the old packages to the new ones.

Aside from these migration steps, \`@shopify/ui-extensions@2024.4\` is backwards compatible with \`@shopify/retail-ui-extensions@1.7.0\`.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'setup',
      title: 'Setup',
      codeblock: {
        title: 'Setup',
        tabs: [
          {
            title: 'yarn',
            code: `${examplePath}/setup.yarn.bash`,
            language: 'bash',
          },
          {
            title: 'npm',
            code: `${examplePath}/setup.npm.bash`,
            language: 'bash',
          },
        ],
      },
      sectionContent: `
1. Before starting, make sure you have the most up to date version of the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli).
1. Navigate to your \`package.json\` in the directory of your UI Extension. You'll need to remove \`@shopify/retail-ui-extensions\` or \`@shopify/retail-ui-extensions-react\` (whichever you're using).
2. If you use React, replace your version of \`react\` and \`@types/react\` (if you use typescript) with version 18 and up. \`@shopify/ui-extensions-react\` does not support any version prior to React 18.
3. Next you'll need to add the new dependencies, \`@shopify/ui-extensions\` or \`@shopify/ui-extensions-react\`. Consult our [changelog](https://shopify.dev/docs/api/pos-ui-extensions/unstable/versions) to see supported versions. If you are using the \`@shopify/ui-extensions-react\` package, you will also need to install \`@shopify/ui-extensions\`.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'code-changes',
      title: 'Code changes',
      codeblock: generateCodeBlock('Code changes', 'migrating', 'code-changes'),
      sectionContent: `
1. Replace imports from \`@shopify/retail-ui-extensions\` with \`@shopify/ui-extensions/point-of-sale\`. Replace imports from \`@shopify/retail-ui-extensions-react\` with \`@shopify/ui-extensions-react/point-of-sale\`.
2. Replace calls to \`extend\` with \`extension\` and replace calls to \`render\` with \`reactExtension\`. Move each call to \`extension\` and \`reactExtension\` to individual files, and export them with an \`export default\` statement.
     `,
    },
    {
      type: 'Generic',
      anchorLink: 'configuration',
      title: 'Configuration',
      codeblock: {
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: `${examplePath}/shopify.extension.toml`,
            language: 'toml',
          },
        ],
        title: 'Configuration',
      },
      sectionContent: `
Migrate your \`shopify.extension.toml\` file to reflect the [new syntax](https://shopify.dev/docs/apps/structure/app-extensions/configuration#how-it-works).
- Specify which \`api_version\` you are using at the top of the file (above \`[[extensions]]\`). This will let POS know which version of the \`ui-extensions\` package you're using.

> Note:
> \`api_version\` needs to be declared in a \`yyyy-mm\` format. If you are using \`@shopify/ui-extensions\` version \`2024.4\` for example, you must declare your \`api_version\` as 2024-04. The patch is irrelevant to \`api_version\`.

- Declare each extension target and file path in \`shopify.extension.toml\`
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'validation',
      title: 'Validation',
      sectionContent: `
Validate your migration by running \`yarn dev\` or \`npm run dev\`
`,
    },
    {
      type: 'Generic',
      anchorLink: 'finalize',
      title: 'Finalize the migration',
      sectionContent: `
1. Deploy your app by running \`npm run deploy\`.
2. When prompted to migrate your extension from \`pos_ui_extension\` to \`ui_extension\`, select "Yes, confirm migration from pos_ui_extension".
3. Your extension should now deploy as the new ui_extension type.
`,
    },
  ],
};

export default data;

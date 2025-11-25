import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'Upgrading to 2025-10',
  description: `
This guide describes how to upgrade your checkout UI extension to API version \`2025-10\` and adopt Polaris web components.
`,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm the id matches the reference name.
  id: 'upgrading-to-2025-10',
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
            code: './examples/upgrading-to-2025-10/shopify.extension-new.toml',
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
        "Instead of accessing APIs from a callback parameter, access them from the global `shopify` object. Here's an example of migrating the `applyAttributeChange` API call.",
      accordionContent: [
        {
          title: 'New API calls in Preact',
          description: '',
          codeblock: {
            title: 'New API calls in Preact',
            tabs: [
              {
                title: 'Preact',
                code: './examples/upgrading-to-2025-10/apis-new.tsx',
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
                code: './examples/upgrading-to-2025-10/apis-old-react.tsx',
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
                code: './examples/upgrading-to-2025-10/apis-old-js.ts',
                language: 'ts',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'migrate-hooks',
      title: 'Migrate hooks',
      sectionContent:
        "If you had previously been using React hooks, import those same hooks from a new Preact-specific package. Here's an example of migrating the `useAttributeValues` hook.",
      accordionContent: [
        {
          title: 'New hooks in Preact',
          description: '',
          codeblock: {
            title: 'New hooks in Preact',
            tabs: [
              {
                title: 'Preact',
                code: './examples/upgrading-to-2025-10/hooks-new.tsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous hooks in React',
          description: '',
          codeblock: {
            title: 'Previous hooks in React',
            tabs: [
              {
                title: 'React',
                code: './examples/upgrading-to-2025-10/hooks-old.tsx',
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
                code: './examples/upgrading-to-2025-10/components-new.tsx',
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
                code: './examples/upgrading-to-2025-10/components-old-react.tsx',
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
                code: './examples/upgrading-to-2025-10/components-old-js.ts',
                language: 'ts',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Markdown',
      anchorLink: 'mapping-legacy-components-to-polaris-web-components',
      title: 'Mapping legacy components to Polaris web components',
      sectionContent: `
|   **Legacy&nbsp;Component**   |   **Polaris&nbsp;Web&nbsp;Component**   |   **Migration&nbsp;Notes**   |
| :----------------------: | :-------------------------------: | :---------------------: |
|                          |   Abbreviation   |   Available                      |
|   \`Badge\`                  |   Badge                                               |   Available                         |
|   \`Banner\`                 |   Banner                                              |   Available                      |
|   \`BlockLayout\`            |                                                      |   Removed. Use \`Grid\`                  |
|   \`BlockSpacer\`            |                                                      |   Removed. Use Stack with \`gap\` property          |
|   \`BlockStack\`             |                                                      |   Removed. Use Stack with \`direction=block\`       |
|   \`Button\`                 |   Button                                              |   Available                      |
|   \`Chat\`                   |   \`Chat\`                                                |   Coming soon                          |
|   \`Checkbox\`               |   Checkbox                                            |   Available                          |
|   \`Choice\`                 |   Choice                                              |   Available                          |
|   \`ChoiceList\`             |   ChoiceList                                          |   Available                          |
|   \`ClipboardItem\`          |   ClipboardItem                                       |   Available                      |
|   \`ConsentCheckbox\`        |   ConsentCheckbox                                     |   Available                          |
|   \`ConsentPhoneField\`      |   ConsentPhoneField                                   |   Available                          |
|   \`DateField\`              |   DateField                                           |   Available                          |
|   \`DatePicker\`             |   DatePicker                                         |   Available                          |
|   \`Disclosure\`             |   Details and Summary                        |   Available                          |
|   \`Divider\`                |   Divider                                             |   Available                          |
|   \`DropZone\`               |   DropZone                                            |   Available                      |
|                              |   EmailField                                            |   Available                      |
|   \`Form\`                   |   Form                                                |   Available                      |
|   \`Grid\`                   |   Grid                                                |   Available                           |
|   \`GridItem\`               |   GridItem                                            |   Available                          |
|   \`Heading\`                |   Heading                                             |   Available                      |
|   \`HeadingGroup\`           |   Section                                             |   Available                          |
|   \`Icon\`                   |   Icon                                                |   Available                          |
|   \`Image\`                  |   Image                                               |   Available                      |
|   \`InlineLayout\`           |                                                      |   Removed. Use \`Grid\`                   |
|   \`InlineSpacer\`           |                                                      |   Removed. Use Stack                  |
|   \`InlineStack\`            |   Stack                                              |  Removed. Use Stack with \`direction=inline\`                  |
|   \`Link\`                   |   Link                                                |   Available                      |
|   \`List\`                   |   UnorderedList or OrderedList                                         |   Available      |
|   \`ListItem\`               |   ListItem                                            |   Available                      |
|   \`Map\`                    |   Map                                                 |   Available                          |
|   \`MapMarker\`              |   MapMarker                                           |   Available                          |
|   \`MapPopover\`             |   Popover                                             |   Available                         |
|   \`Modal\`                  |   Modal                                               |   Available                          |
|                              |   MoneyField                                          |   Available                          |
|   \`PaymentIcon\`            |   PaymentIcon                                         |   Available                         |
|   \`PhoneField\`             |   PhoneField                                          |   Available                          |
|   \`Popover\`                |   Popover                                             |   Available                          |
|   \`Pressable\`              |   Clickable                                           |   Available                          |
|   \`ProductThumbnail\`       |   ProductThumbnail                                    |   Available                          |
|   \`Progress\`               |   Progress                                            |   Available                      |
|   \`QRCode\`                 |   QRCode                                              |   Available                      |
|   \`ScrollView\`             |   ScrollBox                                           |   Available                          |
|   \`Select\`                 |   Select                                              |   Available                          |
|   \`Sheet\`                  |   Sheet                                                 |   Available                          |
|   \`SkeletonImage\`          |                                                       |   Removed                                     |
|   \`SkeletonText\`           |   SkeletonParagraph                                                    |   Available                                     |
|   \`SkeletonTextBlock\`      |   SkeletonParagraph                                                    |   Available                                     |
|   \`Spinner\`                |   Spinner                                             |   Available                      |
|   \`Stepper\`                |   NumberField                                         |   Available                      |
|   \`Switch\`                 |   Switch                                             |   Available                           |
|   \`Tag\`                    |   Chip and ClickableChip                                                 |   Available                          |
|   \`Text\`                   |   Text                                                |   Available                      |
|   \`TextField\` with \`multiline\`                |   TextArea                                            |   Available                      |
|   \`TextBlock\`              |   Paragraph                                         |   Available                   |
|   \`TextField\`              |   TextField                                           |   Available                      |
|                              |   Time                                                |   Available                      |
|   \`ToggleButton\`           |   PressButton                                         |   Available                 |
|   \`ToggleButtonGroup\`      |   ChoiceList or PressButton                                       |   Available            |
|   \`Tooltip\`                |   Tooltip                                             |   Available                          |
|   \`View\`                   |   Box                                                 |   Available                      |
`,
    },
  ],
};

export default data;

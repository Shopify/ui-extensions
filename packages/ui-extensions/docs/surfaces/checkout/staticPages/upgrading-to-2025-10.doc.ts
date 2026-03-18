import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'Upgrading to 2025-10',
  description: `
This guide describes how to upgrade your checkout UI extension to API version \`2025-10\` and adopt [Polaris](/beta/next-gen-dev-platform/polaris) web components.
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
      type: 'Generic',
      anchorLink: 'file-size-limit',
      title: 'File size limit',
      sectionContent:
        'As of `2025-10`, UI extensions are subject to a **64 KB file size limit** upon deployment. This limit applies to the compiled extension bundle and is enforced to ensure fast loading times and optimal performance for buyers during checkout.',
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
|                          |   [Abbreviation](/docs/api/checkout-ui-extensions/2025-10/web-components/titles-and-text/abbreviation)   |   Available                      |
|   \`Badge\`                  |   [Badge](/docs/api/checkout-ui-extensions/2025-10/web-components/titles-and-text/badge)                                               |   Available                         |
|   \`Banner\`                 |   [Banner](/docs/api/checkout-ui-extensions/2025-10/web-components/feedback/banner)                                              |   Available                      |
|   \`BlockLayout\`            |                                                      |   Removed. Use \`Grid\`                  |
|   \`BlockSpacer\`            |                                                      |   Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/stack) with \`gap\` property          |
|   \`BlockStack\`             |                                                      |   Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/stack) with \`direction=block\`       |
|   \`Button\`                 |   [Button](/docs/api/checkout-ui-extensions/2025-10/web-components/actions/button)                                              |   Available                      |
|   \`Chat\`                   |   \`Chat\`                                                |   Coming soon                          |
|   \`Checkbox\`               |   [Checkbox](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/checkbox)                                            |   Available                          |
|   \`Choice\`                 |   [Choice](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/choicelist#choice)                                              |   Available                          |
|   \`ChoiceList\`             |   [ChoiceList](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/choicelist)                                          |   Available                          |
|   \`ClipboardItem\`          |   [ClipboardItem](/docs/api/checkout-ui-extensions/2025-10/web-components/utilities/clipboarditem)                                       |   Available                      |
|   \`ConsentCheckbox\`        |   [ConsentCheckbox](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/consentcheckbox)                                     |   Available                          |
|   \`ConsentPhoneField\`      |   [ConsentPhoneField](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/consentphonefield)                                   |   Available                          |
|   \`DateField\`              |   [DateField](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/datefield)                                           |   Available                          |
|   \`DatePicker\`             |   [DatePicker](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/datepicker)                                         |   Available                          |
|   \`Disclosure\`             |   [Details](/docs/api/checkout-ui-extensions/2025-10/web-components/interactive/details) and [Summary](/docs/api/checkout-ui-extensions/2025-10/web-components/interactive/details#summary)                        |   Available                          |
|   \`Divider\`                |   [Divider](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/divider)                                             |   Available                          |
|   \`DropZone\`               |   [DropZone](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/dropzone)                                            |   Available                      |
|                              |   [EmailField](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/emailfield)                                            |   Available                      |
|   \`Form\`                   |   [Form](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/form)                                                |   Available                      |
|   \`Grid\`                   |   [Grid](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/grid)                                                |   Available                           |
|   \`GridItem\`               |   [GridItem](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/grid#griditem)                                            |   Available                          |
|   \`Heading\`                |   [Heading](/docs/api/checkout-ui-extensions/2025-10/web-components/titles-and-text/heading)                                             |   Available                      |
|   \`HeadingGroup\`           |   [Section](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/section)                                             |   Available                          |
|   \`Icon\`                   |   [Icon](/docs/api/checkout-ui-extensions/2025-10/web-components/media/icon)                                                |   Available                          |
|   \`Image\`                  |   [Image](/docs/api/checkout-ui-extensions/2025-10/web-components/media/image)                                               |   Available                      |
|   \`InlineLayout\`           |                                                      |   Removed. Use \`Grid\`                   |
|   \`InlineSpacer\`           |                                                      |   Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/stack)                  |
|   \`InlineStack\`            |   [Stack](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/stack)                                              |  Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/stack) with \`direction=inline\`                  |
|   \`Link\`                   |   [Link](/docs/api/checkout-ui-extensions/2025-10/web-components/actions/link)                                                |   Available                      |
|   \`List\`                   |   [UnorderedList](/docs/api/checkout-ui-extensions/2025-10/web-components/other/unorderedlist) or [OrderedList](/docs/api/checkout-ui-extensions/2025-10/web-components/other/orderedlist)                                         |   Available      |
|   \`ListItem\`               |   [ListItem](/docs/api/checkout-ui-extensions/2025-10/web-components/other/listitem)                                            |   Available                      |
|   \`Map\`                    |   [Map](/docs/api/checkout-ui-extensions/2025-10/web-components/interactive/map)                                                 |   Available                          |
|   \`MapMarker\`              |   [MapMarker](/docs/api/checkout-ui-extensions/2025-10/web-components/interactive/map#mapmarker)                                           |   Available                          |
|   \`MapPopover\`             |   [Popover](/docs/api/checkout-ui-extensions/2025-10/web-components/overlays/popover)                                             |   Available                         |
|   \`Modal\`                  |   [Modal](/docs/api/checkout-ui-extensions/2025-10/web-components/overlay/modal)                                               |   Available                          |
|                              |   [MoneyField](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/moneyfield)                                          |   Available                          |
|   \`PaymentIcon\`            |   [PaymentIcon](/docs/api/checkout-ui-extensions/2025-10/web-components/media/paymenticon)                                         |   Available                         |
|   \`PhoneField\`             |   [PhoneField](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/phonefield)                                          |   Available                          |
|   \`Popover\`                |   [Popover](/docs/api/checkout-ui-extensions/2025-10/web-components/overlays/popover)                                             |   Available                          |
|   \`Pressable\`              |   [Clickable](/docs/api/checkout-ui-extensions/2025-10/web-components/actions/clickable)                                           |   Available                          |
|   \`ProductThumbnail\`       |   [ProductThumbnail](/docs/api/checkout-ui-extensions/2025-10/web-components/media/productthumbnail)                                    |   Available                          |
|   \`Progress\`               |   [Progress](/docs/api/checkout-ui-extensions/2025-10/web-components/feedback/progress)                                            |   Available                      |
|   \`QRCode\`                 |   [QRCode](/docs/api/checkout-ui-extensions/2025-10/web-components/other/qrcode)                                              |   Available                      |
|   \`ScrollView\`             |   [ScrollBox](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/scrollbox)                                           |   Available                          |
|   \`Select\`                 |   [Select](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/select)                                              |   Available                          |
|   \`Sheet\`                  |   [Sheet](/docs/api/checkout-ui-extensions/2025-10/web-components/overlays/sheet)                                                 |   Available                          |
|   \`SkeletonImage\`          |                                                       |   Removed                                     |
|   \`SkeletonText\`           |   [SkeletonParagraph](/docs/api/checkout-ui-extensions/2025-10/web-components/feedback/skeletonparagraph)                                                    |   Available                                     |
|   \`SkeletonTextBlock\`      |   [SkeletonParagraph](/docs/api/checkout-ui-extensions/2025-10/web-components/feedback/skeletonparagraph)                                                    |   Available                                     |
|   \`Spinner\`                |   [Spinner](/docs/api/checkout-ui-extensions/2025-10/web-components/feedback/spinner)                                             |   Available                      |
|   \`Stepper\`                |   [NumberField](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/numberfield)                                         |   Available                      |
|   \`Switch\`                 |   [Switch](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/switch)                                             |   Available                           |
|   \`Tag\`                    |   [Chip](/docs/api/checkout-ui-extensions/2025-10/web-components/titles-and-text/chip) and [ClickableChip](/docs/api/checkout-ui-extensions/2025-10/web-components/actions/clickablechip)                                                 |   Available                          |
|   \`Text\`                   |   [Text](/docs/api/checkout-ui-extensions/2025-10/web-components/titles-and-text/text)                                                |   Available                      |
|   \`TextField\` with \`multiline\`                |   [TextArea](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/textarea)                                            |   Available                      |
|   \`TextBlock\`              |   [Paragraph](/docs/api/checkout-ui-extensions/2025-10/web-components/titles-and-text/paragraph)                                         |   Available                   |
|   \`TextField\`              |   [TextField](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/textfield)                                           |   Available                      |
|                              |   [Time](/docs/api/checkout-ui-extensions/2025-10/web-components/titles-and-text/time)                                                |   Available                      |
|   \`ToggleButton\`           |   [PressButton](/docs/api/checkout-ui-extensions/2025-10/web-components/actions/pressbutton)                                         |   Available                 |
|   \`ToggleButtonGroup\`      |   [ChoiceList](/docs/api/checkout-ui-extensions/2025-10/web-components/forms/choicelist) or [PressButton](/docs/api/checkout-ui-extensions/2025-10/web-components/actions/pressbutton)                                       |   Available            |
|   \`Tooltip\`                |   [Tooltip](/docs/api/checkout-ui-extensions/2025-10/web-components/overlays/tooltip)                                             |   Available                          |
|   \`View\`                   |   [Box](/docs/api/checkout-ui-extensions/2025-10/web-components/structure/box)                                                 |   Available                      |
`,
    },
  ],
};

export default data;

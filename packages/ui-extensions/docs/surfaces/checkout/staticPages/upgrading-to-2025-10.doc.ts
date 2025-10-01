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
                code: './examples/upgrading-to-2025-10/new-tsconfig.example.json',
                language: 'json',
              },
              {
                title: 'Old tsconfig.json',
                code: './examples/upgrading-to-2025-10/old-tsconfig.example.json',
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
                code: './examples/upgrading-to-2025-10/support-new-shopify-global.example.bash',
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
|                          |   [Abbreviation](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/titles-and-text/abbreviation)   |   Available today                      |
|   \`Badge\`                  |   [Badge](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/titles-and-text/badge)                                               |   Available today                         |
|   \`Banner\`                 |   [Banner](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/feedback/banner)                                              |   Available today                      |
|   \`BlockLayout\`            |                                                      |   Removed. Use \`Grid\`                  |
|   \`BlockSpacer\`            |                                                      |   Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/stack) with \`gap\` property          |
|   \`BlockStack\`             |                                                      |   Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/stack) with \`direction=block\`       |
|   \`Button\`                 |   [Button](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/actions/button)                                              |   Available today                      |
|   \`Chat\`                   |   \`Chat\`                                                |   Coming soon                          |
|   \`Checkbox\`               |   [Checkbox](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/checkbox)                                            |   Available today                          |
|   \`Choice\`                 |   [Choice](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/choicelist#choice)                                              |   Available today                          |
|   \`ChoiceList\`             |   [ChoiceList](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/choicelist)                                          |   Available today                          |
|   \`ClipboardItem\`          |   [ClipboardItem](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/utilities/clipboarditem)                                       |   Available today                      |
|   \`ConsentCheckbox\`        |   [ConsentCheckbox](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/consentcheckbox)                                     |   Available today                          |
|   \`ConsentPhoneField\`      |   [ConsentPhoneField](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/consentphonefield)                                   |   Available today                          |
|   \`DateField\`              |   [DateField](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/datefield)                                           |   Available today                          |
|   \`DatePicker\`             |   [DatePicker](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/datepicker)                                         |   Available today                          |
|   \`Disclosure\`             |   [Details](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/interactive/details) and [Summary](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/interactive/details#summary)                        |   Available today                          |
|   \`Divider\`                |   [Divider](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/divider)                                             |   Available today                          |
|   \`DropZone\`               |   [DropZone](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/dropzone)                                            |   Available today                      |
|                              |   [EmailField](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/emailfield)                                            |   Available today                      |
|   \`Form\`                   |   [Form](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/form)                                                |   Available today                      |
|   \`Grid\`                   |   [Grid](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/grid)                                                |   Available today                           |
|   \`GridItem\`               |   [GridItem](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/grid#griditem)                                            |   Available today                          |
|   \`Heading\`                |   [Heading](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/titles-and-text/heading)                                             |   Available today                      |
|   \`HeadingGroup\`           |   [Section](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/section)                                             |   Available today                          |
|   \`Icon\`                   |   [Icon](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/media/icon)                                                |   Available today                          |
|   \`Image\`                  |   [Image](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/media/image)                                               |   Available today                      |
|   \`InlineLayout\`           |                                                      |   Removed. Use \`Grid\`                   |
|   \`InlineSpacer\`           |                                                      |   Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/stack)                  |
|   \`InlineStack\`            |   [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/stack)                                              |   Use [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/stack) with \`direction=inline\`                  |
|   \`Link\`                   |   [Link](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/actions/link)                                                |   Available today                      |
|   \`List\`                   |   [UnorderedList](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/other/unorderedlist) or [OrderedList](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/other/orderedlist)                                         |   Available today      |
|   \`ListItem\`               |   [ListItem](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/other/listitem)                                            |   Available today                      |
|   \`Map\`                    |   [Map](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/interactive/map)                                                 |   Available today                          |
|   \`MapMarker\`              |   [MapMarker](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/interactive/map#mapmarker)                                           |   Available today                          |
|   \`MapPopover\`             |   [Popover](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/overlays/popover)                                             |   Available today                         |
|   \`Modal\`                  |   [Modal](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/overlay/modal)                                               |   Available today                          |
|                              |   [MoneyField](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/moneyfield)                                          |   Available today                          |
|   \`PaymentIcon\`            |   [PaymentIcon](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/media/paymenticon)                                         |   Available today                         |
|   \`PhoneField\`             |   [PhoneField](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/phonefield)                                          |   Available today                          |
|   \`Popover\`                |   [Popover](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/overlays/popover)                                             |   Available today                          |
|   \`Pressable\`              |   [Clickable](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/actions/clickable)                                           |   Available today                          |
|   \`ProductThumbnail\`       |   [ProductThumbnail](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/media/productthumbnail)                                    |   Available today                          |
|   \`Progress\`               |   [Progress](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/feedback/progress)                                            |   Available today                      |
|   \`QRCode\`                 |   [QRCode](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/other/qrcode)                                              |   Available today                      |
|   \`ScrollView\`             |   [ScrollBox](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/scrollbox)                                           |   Available today                          |
|   \`Select\`                 |   [Select](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/select)                                              |   Available today                          |
|   \`Sheet\`                  |   [Sheet](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/overlays/sheet)                                                 |   Available today                          |
|   \`SkeletonImage\`          |                                                       |   Removed                                     |
|   \`SkeletonText\`           |   [SkeletonParagraph](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/feedback/skeletonparagraph)                                                    |   Available today                                     |
|   \`SkeletonTextBlock\`      |   [SkeletonParagraph](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/feedback/skeletonparagraph)                                                    |   Available today                                     |
|   \`Spinner\`                |   [Spinner](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/feedback/spinner)                                             |   Available today                      |
|   \`Stepper\`                |   [NumberField](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/numberfield)                                         |   Available today                      |
|   \`Switch\`                 |   [Switch](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/switch)                                             |   Available today                           |
|   \`Tag\`                    |   [Chip](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/titles-and-text/chip) and [ClickableChip](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/actions/clickablechip)                                                 |   Available today                          |
|   \`Text\`                   |   [Text](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/titles-and-text/text)                                                |   Available today                      |
|   \`TextField\`  with \`multiline\`             |   [TextArea](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/textarea)                                            |   Available today                      |
|   \`TextBlock\`              |   [Paragraph](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/titles-and-text/paragraph)                                         |   Available today                   |
|   \`TextField\`              |   [TextField](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/textfield)                                           |   Available today                      |
|                              |   [Time](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/titles-and-text/time)                                                |   Available today                      |
|   \`ToggleButton\`           |   [PressButton](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/actions/pressbutton)                                         |   Available today                 |
|   \`ToggleButtonGroup\`      |   [ChoiceList](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/forms/choicelist) or [PressButton](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/actions/pressbutton)                                       |   Available today            |
|   \`Tooltip\`                |   [Tooltip](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/overlays/tooltip)                                             |   Available today                          |
|   \`View\`                   |   [Box](/docs/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/structure/box)                                                 |   Available today                      |
`,
    },
  ],
};

export default data;

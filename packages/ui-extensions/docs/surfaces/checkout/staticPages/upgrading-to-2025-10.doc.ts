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
      sectionNotice: [
        {
          title: 'Early access preview',
          sectionContent: `
We do not recommend migrating your production checkout UI extension to Polaris yet. However, now is a great time to explore this new version and start thinking about what it means for your own extensions.
`,
          type: 'info',
        },
      ],
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
      anchorLink: 'migrate-api-calls',
      title: 'Migrate API calls',
      sectionContent:
        'Instead of accessing APIs from a callback parameter, access them from the global `shopify` object. If you had previously been using React hooks, import those same hooks from a new Preact-specific package.',
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
      type: 'Generic',
      anchorLink: 'polaris-web-components',
      title: 'Polaris web components',
      sectionContent: '',
      sectionNotice: [
        {
          title: 'Early access preview',
          sectionContent: `
These web components are an early access preview of the [Polaris](/beta/next-gen-dev-platform/polaris) UI framework. We will add more components over time.

Use the comparison table below to see which Polaris web components are available today, which are coming soon, and how they map to legacy components.
`,
          type: 'info',
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
|                          |   [Abbreviation](/docs/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/abbreviation)   |   Available today                      |
|   \`Badge\`                  |   \`Badge\`                                               |   Coming soon                          |
|   \`Banner\`                 |   [Banner](/docs/api/checkout-ui-extensions/2025-10-rc/components/feedback/banner)                                              |   Available today                      |
|   \`BlockLayout\`            |                                                      |   Removed. Use \`Grid\`                  |
|   \`BlockSpacer\`            |                                                      |   Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/stack) with \`gap\` property          |
|   \`BlockStack\`             |                                                      |   Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/stack) with \`direction=block\`       |
|   \`Button\`                 |   [Button](/docs/api/checkout-ui-extensions/2025-10-rc/components/actions/button)                                              |   Available today                      |
|   \`Chat\`                   |   \`Chat\`                                                |   Coming soon                          |
|   \`Checkbox\`               |   \`Checkbox\`                                            |   Coming soon                          |
|   \`Choice\`                 |   \`Choice\`                                              |   Coming soon                          |
|   \`ChoiceList\`             |   \`ChoiceList\`                                          |   Coming soon                          |
|   \`ClipboardItem\`          |   [ClipboardItem](/docs/api/checkout-ui-extensions/2025-10-rc/components/utilities/clipboarditem)                                       |   Available today                      |
|   \`ConsentCheckbox\`        |   \`ConsentCheckbox\`                                     |   Coming soon                          |
|   \`ConsentPhoneField\`      |   \`ConsentPhoneField\`                                   |   Coming soon                          |
|   \`DateField\`              |   \`DateField\`                                           |   Coming soon                          |
|   \`DatePicker\`             |   \`DatePicker\`                                          |   Coming soon                          |
|   \`Disclosure\`             |   \`Details\` and \`Summary\`                         |   Coming soon                          |
|   \`Divider\`                |   \`Divider\`                                             |   Coming soon                          |
|   \`DropZone\`               |   [DropZone](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/dropzone)                                            |   Available today                      |
|   \`Form\`                   |   [Form](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/form)                                                |   Available today                      |
|   \`Grid\`                   |   \`Grid\`                                                |   Coming soon                          |
|   \`GridItem\`               |   \`GridItem\`                                            |   Coming soon                          |
|   \`Heading\`                |   [Heading](/docs/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/heading)                                             |   Available today                      |
|   \`HeadingGroup\`           |   [Section](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/section)                                             |   Available today                          |
|   \`Icon\`                   |   [Icon](/docs/api/checkout-ui-extensions/2025-10-rc/components/media/icon)                                                |   Available today                          |
|   \`Image\`                  |   [Image](/docs/api/checkout-ui-extensions/2025-10-rc/components/media/image)                                               |   Available today                      |
|   \`InlineLayout\`           |                                                      |   Removed. Use \`Grid\`                   |
|   \`InlineSpacer\`           |                                                      |   Removed. Use [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/stack)                  |
|   \`InlineStack\`            |   \`Stack\`                                              |   Use [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/stack) with \`direction=inline\`                  |
|   \`Link\`                   |   [Link](/docs/api/checkout-ui-extensions/2025-10-rc/components/actions/link)                                                |   Available today                      |
|   \`List\`                   |   [UnorderedList](/docs/api/checkout-ui-extensions/2025-10-rc/components/other/unorderedlist) or [OrderedList](/docs/api/checkout-ui-extensions/2025-10-rc/components/other/orderedlist)                                         |   Available today      |
|   \`ListItem\`               |   [ListItem](/docs/api/checkout-ui-extensions/2025-10-rc/components/other/listitem)                                            |   Available today                      |
|   \`Map\`                    |   \`Map\`                                                 |   Coming soon                          |
|   \`MapMarker\`              |   \`MapMarker\`                                           |   Coming soon                          |
|   \`MapPopover\`             |   \`Popover\`                                             |   Coming soon                          |
|   \`Modal\`                  |   \`Modal\`                                               |   Coming soon                          |
|   \`PaymentIcon\`            |   \`PaymentIcon\`                                         |   Coming soon                          |
|   \`PhoneField\`             |   \`PhoneField\`                                          |   Coming soon                          |
|   \`Popover\`                |   \`Popover\`                                             |   Coming soon                          |
|   \`Pressable\`              |   \`Clickable\`                                           |   Coming soon                          |
|   \`ProductThumbnail\`       |   \`ProductThumbnail\`                                    |   Coming soon                          |
|   \`Progress\`               |   [Progress](/docs/api/checkout-ui-extensions/2025-10-rc/components/feedback/progress)                                            |   Available today                      |
|   \`QRCode\`                 |   \`QRCode\`                                              |   Available today                      |
|   \`ScrollView\`             |   \`ScrollBox\`                                           |   Coming soon                          |
|   \`Select\`                 |   \`Select\`                                              |   Coming soon                          |
|   \`Sheet\`                  |   \`Sheet\`                                                 |   Coming soon                          |
|   \`SkeletonImage\`          |                                                       |   Removed                                     |
|   \`SkeletonText\`           |   \`SkeletonText\`                                                    |   Coming soon                                     |
|   \`SkeletonTextBlock\`      |   \`SkeletonTextBlock\`                                                    |   Coming soon                                     |
|   \`Spinner\`                |   [Spinner](/docs/api/checkout-ui-extensions/2025-10-rc/components/feedback/spinner)                                             |   Available today                      |
|   \`Stepper\`                |   \`NumberField\`                                         |   Coming soon                      |
|   \`Switch\`                 |   \`Switch\`                                              |   Coming soon                          |
|   \`Tag\`                    |   \`Tag\`                                                 |   Coming soon                          |
|   \`Text\`                   |   [Text](/docs/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/text)                                                |   Available today                      |
|   \`TextBlock\`              |   [Paragraph](/docs/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/paragraph)                                         |   Available today                   |
|   \`TextField\`              |   [TextField](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/textfield)                                           |   Available today                      |
|                              |   [Time](/docs/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/time)                                                |   Available today                      |
|   \`ToggleButton\`           |   \`Option\`                                         |   Coming soon                 |
|   \`ToggleButtonGroup\`      |   \`OptionGroup\`                                         |   Coming soon            |
|   \`Tooltip\`                |   \`Tooltip\`                                             |   Coming soon                          |
|   \`View\`                   |   [Box](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/box)                                                 |   Available today                      |
`,
    },
  ],
};

export default data;

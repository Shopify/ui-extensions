import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'Upgrading to 2025-10',
  description: `
This guide describes how to upgrade your checkout UI extension to API version \`2025-10\`.
`,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm the id matches the reference name.
  id: 'upgrading-to-2025-10',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'migrating-to-polaris-web-components',
      title: 'Migrating to Polaris Web Components',
      sectionContent:
        'Set the API version to `2025-10` in `shopify.extension.toml` to use the new Polaris UI framework.',
      sectionNotice: [
        {
          title: 'Early access preview',
          sectionContent: `
These web components are an early access preview of the [Polaris](https://shopify.dev/beta/next-gen-dev-platform/polaris) UI framework. We will add more components over time. 

Use the comparison table below to see what Polaris web components are available today, which are coming soon, and how they map to legacy components.

We do not recommend migrating your production checkout UI extension to Polaris yet. However, now is a great time to explore this new version and start thinking about what it means for your own extensions.
`,
          type: 'info',
        },
      ],
    },
    {
      type: 'Markdown',
      anchorLink: 'mapping-legacy-components-to-polaris-web-components',
      title: 'Mapping Legacy Components to Polaris Web Components',
      sectionContent: `
|   **Legacy&nbsp;Component**   |   **Polaris&nbsp;Web&nbsp;Component**   |   **Migration&nbsp;Notes**   |
| :----------------------: | :-------------------------------: | :---------------------: |
|                          |   [Abbreviation](/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/abbreviation)   |   Available today                      |
|   \`Badge\`                  |   \`Badge\`                                               |   Coming soon                          |
|   \`Banner\`                 |   [Banner](/api/checkout-ui-extensions/2025-10-rc/components/feedback/banner)                                              |   Available today                      |
|   \`BlockLayout\`            |                                                      |   Removed. Use \`Grid\`                  |
|   \`BlockSpacer\`            |                                                      |   Removed. Use [Stack](/api/checkout-ui-extensions/2025-10-rc/components/structure/stack) with \`gap\` property          |
|   \`BlockStack\`             |                                                      |   Removed. Use [Stack](/api/checkout-ui-extensions/2025-10-rc/components/structure/stack) with \`direction=block\`       |
|   \`Button\`                 |   [Button](/api/checkout-ui-extensions/2025-10-rc/components/actions/button)                                              |   Available today                      |
|   \`Chat\`                   |   \`Chat\`                                                |   Coming soon                          |
|   \`Checkbox\`               |   \`Checkbox\`                                            |   Coming soon                          |
|   \`Choice\`                 |   \`Choice\`                                              |   Coming soon                          |
|   \`ChoiceList\`             |   \`ChoiceList\`                                          |   Coming soon                          |
|   \`ClipboardItem\`          |   [ClipboardItem](/api/checkout-ui-extensions/2025-10-rc/components/utilities/clipboarditem)                                       |   Available today                      |
|   \`ConsentCheckbox\`        |   \`ConsentCheckbox\`                                     |   Coming soon                          |
|   \`ConsentPhoneField\`      |   \`ConsentPhoneField\`                                   |   Coming soon                          |
|   \`DateField\`              |   \`DateField\`                                           |   Coming soon                          |
|   \`DatePicker\`             |   \`DatePicker\`                                          |   Coming soon                          |
|   \`Disclosure\`             |   \`Details\` and \`Summary\`                         |   Coming soon                          |
|   \`Divider\`                |   \`Divider\`                                             |   Coming soon                          |
|   \`DropZone\`               |   [DropZone](/api/checkout-ui-extensions/2025-10-rc/components/forms/dropzone)                                            |   Available today                      |
|   \`Form\`                   |   [Form](/api/checkout-ui-extensions/2025-10-rc/components/forms/form)                                                |   Available today                      |
|   \`Grid\`                   |   \`Grid\`                                                |   Coming soon                          |
|   \`GridItem\`               |   \`GridItem\`                                            |   Coming soon                          |
|   \`Heading\`                |   [Heading](/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/heading)                                             |   Available today                      |
|   \`HeadingGroup\`           |   \`Section\`                                             |   Coming soon                          |
|   \`Icon\`                   |   [Icon](/api/checkout-ui-extensions/2025-10-rc/components/media/icon)                                                |   Available today                          |
|   \`Image\`                  |   [Image](/api/checkout-ui-extensions/2025-10-rc/components/media/image)                                               |   Available today                      |
|   \`InlineLayout\`           |                                                      |   Removed. Use \`Grid\`                   |
|   \`InlineSpacer\`           |                                                      |   Removed. Use [Stack](/api/checkout-ui-extensions/2025-10-rc/components/structure/stack)                  |
|   \`InlineStack\`            |   \`Stack\`                                              |   Use [Stack](/api/checkout-ui-extensions/2025-10-rc/components/structure/stack) with \`direction=inline\`                  |
|   \`Link\`                   |   [Link](/api/checkout-ui-extensions/2025-10-rc/components/actions/link)                                                |   Available today                      |
|   \`List\`                   |   [UnorderedList](/api/checkout-ui-extensions/2025-10-rc/components/other/unorderedlist) or [OrderedList](/api/checkout-ui-extensions/2025-10-rc/components/other/orderedlist)                                         |   Available today      |
|   \`ListItem\`               |   [ListItem](/api/checkout-ui-extensions/2025-10-rc/components/other/listitem)                                            |   Available today                      |
|   \`Map\`                    |   \`Map\`                                                 |   Coming soon                          |
|   \`MapMarker\`              |   \`MapMarker\`                                           |   Coming soon                          |
|   \`MapPopover\`             |   \`Popover\`                                             |   Coming soon                          |
|   \`Modal\`                  |   \`Modal\`                                               |   Coming soon                          |
|   \`PaymentIcon\`            |   \`PaymentIcon\`                                         |   Coming soon                          |
|   \`PhoneField\`             |   \`PhoneField\`                                          |   Coming soon                          |
|   \`Popover\`                |   \`Popover\`                                             |   Coming soon                          |
|   \`Pressable\`              |   \`Clickable\`                                           |   Coming soon                          |
|   \`ProductThumbnail\`       |   \`ProductThumbnail\`                                    |   Coming soon                          |
|   \`Progress\`               |   [Progress](/api/checkout-ui-extensions/2025-10-rc/components/feedback/progress)                                            |   Available today                      |
|   \`QRCode\`                 |   \`QRCode\`                                              |   Available today                      |
|   \`ScrollView\`             |   \`ScrollBox\`                                           |   Coming soon                          |
|   \`Select\`                 |   \`Select\`                                              |   Coming soon                          |
|   \`Sheet\`                  |   \`Sheet\`                                                 |   Coming soon                          |
|   \`SkeletonImage\`          |                                                       |   Removed                                     |
|   \`SkeletonText\`           |   \`SkeletonText\`                                                    |   Coming soon                                     |
|   \`SkeletonTextBlock\`      |   \`SkeletonTextBlock\`                                                    |   Coming soon                                     |
|   \`Spinner\`                |   [Spinner](/api/checkout-ui-extensions/2025-10-rc/components/feedback/spinner)                                             |   Available today                      |
|   \`Stepper\`                |   \`NumberField\`                                         |   Coming soon                      |
|   \`Switch\`                 |   \`Switch\`                                              |   Coming soon                          |
|   \`Tag\`                    |   \`Tag\`                                                 |   Coming soon                          |
|   \`Text\`                   |   [Text](/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/text)                                                |   Available today                      |
|   \`TextBlock\`              |   [Paragraph](/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/paragraph)                                         |   Available today                   |
|   \`TextField\`              |   [TextField](/api/checkout-ui-extensions/2025-10-rc/components/forms/textfield)                                           |   Available today                      |
|                              |   [Time](/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/time)                                                |   Available today                      |
|   \`ToggleButton\`           |   \`Option\`                                         |   Coming soon                 |
|   \`ToggleButtonGroup\`      |   \`OptionGroup\`                                         |   Coming soon            |
|   \`Tooltip\`                |   \`Tooltip\`                                             |   Coming soon                          |
|   \`View\`                   |   [Box](/api/checkout-ui-extensions/2025-10-rc/components/structure/box)                                                 |   Available today                      |
`,
    },
  ],
};

export default data;

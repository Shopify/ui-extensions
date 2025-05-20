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
        'Set the API version to `2025-10` in `shopify.extension.toml` to use the new Polaris UI framework (still in early preview). Use the comparison table below to see what Polaris web components are available today and how they map to legacy components.',
      sectionNotice: [
        {
          title: 'Early access preview',
          sectionContent: `
These web components are an early access preview of the [Polaris](https://shopify.dev/beta/next-gen-dev-platform/polaris) UI framework. We do not recommend migrating your production checkout UI extension to Polaris yet. However, now is a great time to explore this new version and start thinking about what it means for your own extensions.
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
|   \`Badge\`                  |   \`Badge\`                                               |   Coming Soon                          |
|   \`Banner\`                 |   [Banner](/api/checkout-ui-extensions/2025-10-rc/components/feedback/banner)                                              |   Available today                      |
|   \`BlockLayout\`            |                                                      |   Removed. Use \`Grid\`                  |
|   \`BlockSpacer\`            |                                                      |   Removed. Use [Stack](/api/checkout-ui-extensions/2025-10-rc/components/structure/stack) with \`gap\` property          |
|   \`BlockStack\`             |                                                      |   Removed. Use [Stack](/api/checkout-ui-extensions/2025-10-rc/components/structure/stack) with \`direction=block\`       |
|   \`Button\`                 |   [Button](/api/checkout-ui-extensions/2025-10-rc/components/actions/button)                                              |   Available today                      |
|   \`Chat\`                   |   \`Chat\`                                                |   Coming Soon                          |
|   \`Checkbox\`               |   \`Checkbox\`                                            |   Coming Soon                          |
|   \`Choice\`                 |   \`Choice\`                                              |   Coming Soon                          |
|   \`ChoiceList\`             |   \`ChoiceList\`                                          |   Coming Soon                          |
|   \`ClipboardItem\`          |   [ClipboardItem](/api/checkout-ui-extensions/2025-10-rc/components/utilities/clipboarditem)                                       |   Available today                      |
|   \`ConsentCheckbox\`        |   \`ConsentCheckbox\`                                     |   Coming Soon                          |
|   \`ConsentPhoneField\`      |   \`ConsentPhoneField\`                                   |   Coming Soon                          |
|   \`DateField\`              |   \`DateField\`                                           |   Coming Soon                          |
|   \`DatePicker\`             |   \`DatePicker\`                                          |   Coming Soon                          |
|   \`Disclosure\`             |   \`Details\` and \`Summary\`                         |   Coming Soon                          |
|   \`Divider\`                |   \`Divider\`                                             |   Coming Soon                          |
|   \`DropZone\`               |   [DropZone](/api/checkout-ui-extensions/2025-10-rc/components/forms/dropzone)                                            |   Available today                      |
|   \`Form\`                   |   [Form](/api/checkout-ui-extensions/2025-10-rc/components/forms/form)                                                |   Available today                      |
|   \`Grid\`                   |   \`Grid\`                                                |   Coming Soon                          |
|   \`GridItem\`               |   \`GridItem\`                                            |   Coming Soon                          |
|   \`Heading\`                |   [Heading](/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/heading)                                             |   Available today                      |
|   \`HeadingGroup\`           |   \`Section\`                                             |   Coming Soon                          |
|   \`Icon\`                   |   [Icon](/api/checkout-ui-extensions/2025-10-rc/components/media/icon)                                                |   Available today                          |
|   \`Image\`                  |   [Image](/api/checkout-ui-extensions/2025-10-rc/components/media/image)                                               |   Available today                      |
|   \`InlineLayout\`           |                                                      |   Removed. Use \`Grid\`                   |
|   \`InlineSpacer\`           |                                                      |   Removed. Use [Stack](/api/checkout-ui-extensions/2025-10-rc/components/structure/stack)                  |
|   \`InlineStack\`            |   \`Stack\`                                              |   Use [Stack](/api/checkout-ui-extensions/2025-10-rc/components/structure/stack) with \`direction=inline\`                  |
|   \`Link\`                   |   [Link](/api/checkout-ui-extensions/2025-10-rc/components/actions/link)                                                |   Available today                      |
|   \`List\`                   |   [UnorderedList](/api/checkout-ui-extensions/2025-10-rc/components/other/unorderedlist) or [OrderedList](/api/checkout-ui-extensions/2025-10-rc/components/other/orderedlist)                                         |   Available today      |
|   \`ListItem\`               |   [ListItem](/api/checkout-ui-extensions/2025-10-rc/components/other/listitem)                                            |   Available today                      |
|   \`Map\`                    |   \`Map\`                                                 |   Coming Soon                          |
|   \`MapMarker\`              |   \`MapMarker\`                                           |   Coming Soon                          |
|   \`MapPopover\`             |   \`Popover\`                                             |   Coming Soon                          |
|   \`Modal\`                  |   \`Modal\`                                               |   Coming Soon                          |
|   \`PaymentIcon\`            |   \`PaymentIcon\`                                         |   Coming Soon                          |
|   \`PhoneField\`             |   \`PhoneField\`                                          |   Coming Soon                          |
|   \`Popover\`                |   \`Popover\`                                             |   Coming Soon                          |
|   \`Pressable\`              |   \`Clickable\`                                           |   Coming Soon                          |
|   \`ProductThumbnail\`       |   \`ProductThumbnail\`                                    |   Coming Soon                          |
|   \`Progress\`               |   [Progress](/api/checkout-ui-extensions/2025-10-rc/components/feedback/progress)                                            |   Available today                      |
|   \`QRCode\`                 |   \`QRCode\`                                              |   Available today                      |
|   \`ScrollView\`             |   \`ScrollBox\`                                           |   Coming Soon                          |
|   \`Select\`                 |   \`Select\`                                              |   Coming Soon                          |
|   \`Sheet\`                  |   \`Sheet\`                                                 |   Coming Soon                          |
|   \`SkeletonImage\`          |                                                       |   Removed                                     |
|   \`SkeletonText\`           |   \`SkeletonText\`                                                    |   Coming Soon                                     |
|   \`SkeletonTextBlock\`      |   \`SkeletonTextBlock\`                                                    |   Coming Soon                                     |
|   \`Spinner\`                |   [Spinner](/api/checkout-ui-extensions/2025-10-rc/components/feedback/spinner)                                             |   Available today                      |
|   \`Stepper\`                |   \`NumberField\`                                         |   Coming soon                      |
|   \`Switch\`                 |   \`Switch\`                                              |   Coming Soon                          |
|   \`Tag\`                    |   \`Tag\`                                                 |   Coming Soon                          |
|   \`Text\`                   |   [Text](/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/text)                                                |   Available today                      |
|   \`TextBlock\`              |   [Paragraph](/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/paragraph)                                         |   Available today                   |
|   \`TextField\`              |   [TextField](/api/checkout-ui-extensions/2025-10-rc/components/forms/textfield)                                           |   Available today                      |
|                              |   [Time](/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/time)                                                |   Available today                      |
|   \`ToggleButton\`           |   \`Option\`                                         |   Coming soon                 |
|   \`ToggleButtonGroup\`      |   \`OptionGroup\`                                         |   Coming soon            |
|   \`Tooltip\`                |   \`Tooltip\`                                             |   Coming Soon                          |
|   \`View\`                   |   [Box](/api/checkout-ui-extensions/2025-10-rc/components/structure/box)                                                 |   Available today                      |
`,
    },
  ],
};

export default data;

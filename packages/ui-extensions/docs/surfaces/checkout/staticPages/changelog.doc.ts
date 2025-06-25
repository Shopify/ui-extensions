import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Changelog',
  description: `
Stay up to date with the latest component releases, updates, and changes for Shopify checkout UI extensions.
`,
  id: 'changelog',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'latest-releases',
      title: 'Latest Releases',
      sectionContent:
        'Keep track of the most recent component updates and new releases.',
      sectionNotice: [
        {
          title: 'Early access preview',
          sectionContent: `
These web components are an early access preview of the [Polaris](/beta/next-gen-dev-platform/polaris) UI framework. We will add more components over time.
`,
          type: 'info',
        },
      ],
    },
    {
      type: 'Markdown',
      anchorLink: 'June',
      title: 'June 2025',
      sectionContent: `
Released: June 25, 2025

- Added new components:
  - [Checkbox](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/checkbox)
  - [EmailField](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/emailfield)
  - [Map](/docs/api/checkout-ui-extensions/2025-10-rc/components/interactive/map)
  - [MapMarker](/docs/api/checkout-ui-extensions/2025-10-rc/components/interactive/map#mapmarker)
  - [Modal](/docs/api/checkout-ui-extensions/2025-10-rc/components/overlay/modal)
  - [PhoneField](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/phonefield)
  - [ProductThumbnail](/docs/api/checkout-ui-extensions/2025-10-rc/components/media/productthumbnail)
  - [TextArea](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/textarea)
`,
    },
    {
      type: 'Markdown',
      anchorLink: 'May',
      title: 'May 2025',
      sectionContent: `
Released: May 21, 2025

- Added new components:
  - [Abbreviation](/docs/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/abbreviation)
  - [Banner](/docs/api/checkout-ui-extensions/2025-10-rc/components/feedback/banner)
  - [Box](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/box)
  - [Button](/docs/api/checkout-ui-extensions/2025-10-rc/components/actions/button)
  - [ClipboardItem](/docs/api/checkout-ui-extensions/2025-10-rc/components/utilities/clipboarditem)
  - [DropZone](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/dropzone)
  - [Form](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/form)
  - [Heading](/docs/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/heading)
  - [Icon](/docs/api/checkout-ui-extensions/2025-10-rc/components/media/icon)
  - [Image](/docs/api/checkout-ui-extensions/2025-10-rc/components/media/image)
  - [Link](/docs/api/checkout-ui-extensions/2025-10-rc/components/actions/link)
  - [ListItem](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/listitem)
  - [OrderedList](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/orderedlist)
  - [Paragraph](/docs/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/paragraph)
  - [PaymentIcon](/docs/api/checkout-ui-extensions/2025-10-rc/components/media/paymenticon)
  - [Progress](/docs/api/checkout-ui-extensions/2025-10-rc/components/feedback/progress)
  - [QRCode](/docs/api/checkout-ui-extensions/2025-10-rc/components/other/qrcode)
  - [Spinner](/docs/api/checkout-ui-extensions/2025-10-rc/components/feedback/spinner)
  - [Stack](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/stack)
  - [TextField](/docs/api/checkout-ui-extensions/2025-10-rc/components/forms/textfield)
  - [Time](/docs/api/checkout-ui-extensions/2025-10-rc/components/titles-and-text/time)
  - [UnorderedList](/docs/api/checkout-ui-extensions/2025-10-rc/components/structure/unorderedlist)
`,
    },
  ],
};

export default data;

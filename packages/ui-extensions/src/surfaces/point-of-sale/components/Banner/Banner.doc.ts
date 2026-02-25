import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'The banner component highlights important information or required actions. Use banners to communicate critical updates, warnings, informational messages, or success notifications that require merchant attention.' +
    '\n\nBanners provide persistent visibility with support for dismissible and non-dismissible states.',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the banner component.',
      type: 'Banner',
    },
    {
      title: 'Slots',
      description:
        'The banner component supports slots for additional content placement within the banner. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'BannerSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Feedback and status indicators',
  defaultExample: {
    image: 'banner-default.png',
    description:
      'Display important messages using a banner component with automatic color coding based on message severity. This example shows a basic banner with a heading and descriptive text.',
    codeblock: {
      title: 'Display important messages with a banner',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Apply appropriate tones:** Use \`critical\` for errors requiring immediate action, \`warning\` for important notices, \`success\` for confirmations, \`info\` for general information.
- **Keep headings concise:** Write brief headings that clearly communicate the message. Use the collapsible feature for additional detail.
- **Show one banner at a time:** Display only one banner to avoid overwhelming the interface. Prioritize by importance.
- **Make non-critical banners dismissible:** Allow dismissal for non-critical information. Keep critical alerts non-dismissible until resolved.
- **Include clear actions:** If action is needed, use the primaryAction slot to provide clear next steps.
- **Use for persistent messages:** Use banners for messages that need to persist. For temporary notifications, consider toast notifications.
`,
    },
  ],
  related: [],
};

export default data;

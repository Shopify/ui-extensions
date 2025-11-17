import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'The `Banner` component highlights important information or required actions prominently within the POS interface. Use banners to communicate critical updates, warnings, informational messages, or success notifications that require merchant attention in a persistent but non-interruptive way.' +
    '\n\nThe component provides persistent visibility for important messages while remaining non-intrusive to the main workflow, with support for dismissible and non-dismissible states. It includes automatic color coding based on message severity and integrates with the POS design system to maintain visual consistency across different alert types and use cases.',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Banner` component.',
      type: 'Banner',
    },
    {
      title: 'Slots',
      description:
        'The `Banner` component supports slots for additional content placement within the banner. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'BannerSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'banner-default.png',
    codeblock: {
      title: 'Code',
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
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
- Use when needing to communicate to merchants in a way that is persistent but non-interruptive.
- Only one banner should be visible at a time.
`,
    },
  ],
  related: [],
};

export default data;

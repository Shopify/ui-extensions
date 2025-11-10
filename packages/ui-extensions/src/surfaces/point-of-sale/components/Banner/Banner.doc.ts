import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'Highlight important information or required actions prominently within the POS interface.',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Banner',
    },
    {
      title: 'Slots',
      description: '',
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

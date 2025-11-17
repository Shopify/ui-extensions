import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Section',
  description:
    'The `Section` component groups related content into clearly-defined thematic areas. Sections have contextual heading levels to maintain a meaningful page structure.' +
    '\n\nUse sections to organize content logically and provide clear navigation landmarks. The component manages heading levels to ensure nested sections maintain proper semantic structure.',
  thumbnail: 'section-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Section` component.',
      type: 'Section',
    },
    {
      title: 'Slots',
      description:
        'The `Section` component supports slots for additional content placement within the section. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'SectionSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'section-default.png',
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
  related: [],
};

export default data;

import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'The `Icon` component displays standardized visual symbols from the POS catalog to represent actions, statuses, or categories consistently. Use icons to enhance navigation or provide visual context alongside text in POS interfaces.' +
    '\n\nIcons help merchants quickly understand interface elements and actions without relying solely on text labels. Icons are optimized for readability at standard sizes and automatically scale to maintain visual consistency across different screen densities and device types.',
  thumbnail: 'icon-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Icon` component.',
      type: 'Icon',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Media',
  defaultExample: {
    image: 'icon-default.png',
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

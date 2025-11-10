import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'Use color and text to communicate the state of orders, products, customers, and other business data.',
  thumbnail: 'badge-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Badge',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'badge-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'HTML',
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
- Badges should be positioned as close as possible to the item they’re related to.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'content-guidelines',
      title: 'Content guidelines',
      sectionContent: `
- Be concise. Use a single word to describe the status of an item.
- Only use two or three words if you need to describe a complex state, for example "partially fulfilled".

✅ fulfilled
❌ order fulfilled

Statuses should ideally be written as adjectives:

✅ unpaid
❌ payment not received
      `,
    },
  ],
  related: [],
};

export default data;

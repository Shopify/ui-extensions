import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'Informs merchants about the status of an object or indicates that an action has been completed. Badges display text with visual styling to communicate status information.',
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

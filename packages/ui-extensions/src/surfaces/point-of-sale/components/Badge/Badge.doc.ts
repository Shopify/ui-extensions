import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'The `Badge` component uses color and text to communicate status information for orders, products, customers, and other business data. Use badges to create visual hierarchy and help merchants quickly identify important information or status changes within your POS interface.' +
    '\n\nThe component automatically adjusts its appearance based on the specified `tone` property, ensuring consistent visual communication across the POS interface. Badges support different sizes and can display text, numbers, or status indicators, making them versatile for representing everything from order counts to inventory alerts in a compact, scannable format.',
  thumbnail: 'badge-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Badge` component.',
      type: 'Badge',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'badge-default.png',
    description:
      'Display status information using a `Badge` component with customizable tone and content. This example shows a basic badge with a tone property to indicate status through color.',
    codeblock: {
      title: 'Display status information with a badge',
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

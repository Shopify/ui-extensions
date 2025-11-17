import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForBadge = (title: string, fileName: string) =>
  generateCodeBlock(title, 'badge', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'The `Badge` component uses color and text to communicate status information for orders, products, customers, and other business data. Use badges to create visual hierarchy and help merchants quickly identify important information or status changes within your POS interface.\n\nThe component automatically adjusts its appearance based on the specified `tone` property, ensuring consistent visual communication across the POS interface. Badges support different sizes and can display text, numbers, or status indicators, making them versatile for representing everything from order counts to inventory alerts in a compact, scannable format.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Badge` component.',
      type: 'BadgeProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'badge-thumbnail.png',
  defaultExample: {
    image: 'badge-default.png',
    codeblock: generateCodeBlockForBadge('Badge', 'default.example'),
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
};

export default data;

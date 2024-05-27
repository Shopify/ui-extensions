import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForBadge = (title: string, fileName: string) =>
  generateCodeBlock(title, 'badge', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'Badges are used to inform merchants of the status of an item or action that’s been taken.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Badge',
      description: '',
      type: 'BadgeProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
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

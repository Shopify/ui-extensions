import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'The badge component uses color and text to communicate status information for orders, products, customers, and other business data. Use badges to create visual hierarchy and help merchants quickly identify important information or status changes.' +
    "\n\nBadges aren't interactive elements. They display information but don't respond to user interactions like clicks or taps.",
  thumbnail: 'badge-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the badge component.',
      type: 'Badge',
    },
  ],
  category: 'Web components',
  subCategory: 'Feedback and status indicators',
  defaultExample: {
    image: 'badge-default.png',
    description:
      'Display status information using a badge component with customizable tone and content. This example shows a basic badge with a tone property to indicate status through color.',
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
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Apply appropriate tones:** Use \`success\` for positive states, \`critical\` for urgent issues, \`warning\` for attention-needed states, \`info\` for neutral information.
- **Keep text brief:** Use single words or short phrases. Avoid lengthy descriptions that don't fit the compact design.
- **Position near related content:** Place badges next to the items they describe for clear associations.
- **Use for status, not actions:** Badges display information only. For interactive elements, use buttons or clickable components.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Very long text content may be truncated or cause layout issues depending on the container and screen size.`,
    },
  ],
  related: [],
};

export default data;

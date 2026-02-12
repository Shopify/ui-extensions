import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForBadge = (title: string, fileName: string) =>
  generateCodeBlock(title, 'badge', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'The Badge component uses color and text to communicate status information for orders, products, customers, and other business data. Use badges to create visual hierarchy and help merchants quickly identify important information or status changes within your POS interface.\n\nThe component automatically adjusts its appearance based on the specified `tone` property, ensuring consistent visual communication across the POS interface. Badges support different sizes and can display text, numbers, or status indicators, making them versatile for representing everything from order counts to inventory alerts in a compact, scannable format.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Badge component.',
      type: 'BadgeProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Feedback and status indicators',
  related: [],
  thumbnail: 'badge-thumbnail.png',
  defaultExample: {
    image: 'badge-default.png',
    codeblock: generateCodeBlockForBadge(
      'Show a status badge',
      'default.example',
    ),
    description:
      'Show status information using color-coded badges. This example demonstrates rendering badges with different variants (success, warning, critical, info) and status indicators to communicate order, product, or customer status at a glance.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Keep badge text concise and clear:** Badge text should be brief and immediately understandable. Use single words when possible, or short phrases for complex states. Avoid lengthy descriptions that might not fit well within the badge's compact design.\n- **Position badges close to related content:** Place badges near the items they describe to create clear associations. For example, position order status badges next to order numbers, or inventory badges next to product names to maintain visual relationships.\n- **Maintain consistency across similar contexts:** Use the same badge variants and terminology for similar states throughout your POS interface. This helps merchants develop familiarity with your status system and reduces cognitive load when processing information.\n- **Use badges for status, not actions:** Badges are designed to display information and status, not to trigger actions. For interactive elements, use buttons or clickable components instead of badges to maintain clear interaction patterns.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Badges aren't interactive elements—they display information but don't respond to user interactions like clicks or taps.\n- The component relies on predefined variants for styling, so custom appearances may require different approaches.\n- Very long text content may be truncated or cause layout issues depending on the container and screen size.\n`,
    },
  ],
};

export default data;

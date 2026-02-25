import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'The Icon component displays standardized visual symbols from the POS catalog to represent actions, statuses, or categories consistently. Use icons to enhance navigation or provide visual context alongside text in POS interfaces.\n\nIcons help merchants quickly understand interface elements and actions without relying solely on text labels. Icons are optimized for readability at standard sizes and automatically scale to maintain visual consistency across different screen densities and device types.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Icon component.',
      type: 'IconProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Media and visuals',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Use appropriate sizes for context:** Match icon sizes to their surrounding content and importance. Use \`'s'\` for inline text or secondary actions, \`'m'\` for standard interface elements, \`'l'\` (default) for primary actions, and \`'xl'\` for prominent features or headers.\n- **Apply consistent tones for semantic meaning:** Use tone consistently across your interface to establish clear visual patterns. Apply \`'icon-critical'\` for destructive actions like delete, \`'icon-warning'\` for cautions, \`'icon-success'\` for confirmations, and \`'icon-primary'\` for general interface elements.\n- **Combine icons with text when appropriate:** While icons enhance visual communication, consider pairing them with text labels, especially for complex or less common actions.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Icons are purely decorative and don't support click events or interactive behaviors.\n- The available icon set is predefined and limited to POS-specific symbols—custom icons or external icon libraries aren't supported.\n- Icon appearance and styling are controlled by the POS design system—custom colors, styles, or modifications beyond the provided properties are not available.\n`,
    },
  ],
  defaultExample: {
    image: 'icon-default.png',
    codeblock: generateCodeBlock('Show icons', 'icon', 'default-example'),
    description:
      'Show icons from the POS catalog to represent actions or statuses consistently. This example demonstrates rendering icons that enhance navigation, provide visual context alongside text, and maintain visual consistency across the interface with automatic scaling for different screen densities.',
  },
  thumbnail: 'icon-thumbnail.png',
};

export default data;

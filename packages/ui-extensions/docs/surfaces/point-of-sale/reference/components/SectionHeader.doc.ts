import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SectionHeader',
  description:
    'The SectionHeader component displays a title with an optional action button and divider line. Use it to create consistent section headings with interactive elements that organize content and provide contextual actions.\n\nThe component provides a consistent header layout for section groupings with support for titles, actions, and dividers following POS design specifications. It ensures proper visual hierarchy and spacing within forms and settings interfaces, helping merchants understand content organization and providing quick access to section-level actions.\n\nSectionHeader components ensure consistent header styling and spacing across all sections while allowing action button customization, maintaining visual unity while supporting context-specific functionality.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the SectionHeader component.',
      type: 'SectionHeaderProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  thumbnail: 'section-header-thumbnail.png',
  defaultExample: {
    image: 'section-header-default.png',
    codeblock: generateCodeBlock(
      'Add a section header with actions',
      'section-header',
      'default.example',
    ),
    description:
      'Create consistent section headings with titles, optional action buttons, and divider lines. This example shows a SectionHeader that organizes content with proper visual hierarchy, helping merchants understand content structure and providing quick access to section-level actions.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Design meaningful action buttons:** When providing an action, use clear and descriptive button labels that indicate exactly what will happen when pressed. Avoid generic terms like "Action" in favor of specific actions like "Edit Settings" or "Add Item."\n- **Control divider visibility strategically:** Use the \`hideDivider\` property to control visual separation based on your layout needs. Show dividers when you need clear section boundaries, and hide them when the visual separation might create unnecessary visual clutter.\n- **Maintain consistent header patterns:** Establish consistent patterns for how you use SectionHeader across your POS UI extension. Similar types of content should have similar header structures, helping users develop familiarity with your interface organization.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Action buttons require a title to function properly—SectionHeader can't display actions without an accompanying title.\n- Only one action button is supported per SectionHeader to maintain clean, focused interfaces that don't overwhelm users.\n- The component's visual styling and layout are controlled by the POS design system—custom header styling beyond the provided properties is not supported.\n- SectionHeader is a standalone component separate from Section—it doesn't automatically integrate with Section component functionality or provide the same semantic benefits.\n`,
    },
  ],
};

export default data;

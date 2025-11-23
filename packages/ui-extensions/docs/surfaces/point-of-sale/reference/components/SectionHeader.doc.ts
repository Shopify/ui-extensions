import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SectionHeader',
  description:
    'The `SectionHeader` component displays a title with an optional action button and divider line. Use it to create consistent section headings with interactive elements that organize content and provide contextual actions.\n\nThe component provides a consistent header layout for section groupings with support for titles, actions, and dividers following POS design specifications. It ensures proper visual hierarchy and spacing within forms and settings interfaces, helping merchants understand content organization and providing quick access to section-level actions.\n\n`SectionHeader` components ensure consistent header styling and spacing across all sections while allowing action button customization, maintaining visual unity while supporting context-specific functionality.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `SectionHeader` component.',
      type: 'SectionHeaderProps',
    },
  ],
  category: 'Components',
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
};

export default data;

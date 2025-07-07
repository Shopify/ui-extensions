import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Time';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'time-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TimeProps',
    },
  ],
  defaultExample: {
    image: 'time-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-time.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Use Time component for displaying time values to ensure consistent formatting.\n\n- Provide time values in a clear, readable format.\n\n- Consider using 24-hour format for international audiences.\n\n- Include timezone information when relevant.\n\n- Use Time component for any time-related content to maintain semantic meaning.',
    },
  ],
};

export default data;

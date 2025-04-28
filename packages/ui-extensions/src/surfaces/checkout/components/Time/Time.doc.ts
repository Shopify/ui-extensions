import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Time',
  description:
    'Represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format.',
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
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'time-default.png',
    codeblock: {
      title: 'Default example',
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
    {
      type: 'Generic',
      anchorLink: 'accessibility',
      title: 'Accessibility',
      sectionContent:
        'The Time component uses the HTML `<time>` element with appropriate ARIA roles:\n\n| Role | Description |\n| --- | --- |\n| <code>"time"</code> | Used to identify time-related content |\n\nScreen readers will announce the time value appropriately, making it accessible to all users.',
    },
  ],
  related: [
    {
      subtitle: 'Related components',
      name: 'Paragraph',
      url: 'paragraph',
      type: 'component',
    },
  ],
};

export default data;

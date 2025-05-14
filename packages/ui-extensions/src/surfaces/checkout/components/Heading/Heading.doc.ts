import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Heading';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'heading-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'HeadingProps',
    },
  ],
  defaultExample: {
    image: 'heading-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-heading.example.html',
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
        '- Add a heading at the top of each section that clearly describe what’s below.\n\n- Use the heading to highlight the most important concepts or pieces of information that customers need to know.',
    },
  ],
  related: [
    {
      name: 'Text',
      subtitle: 'Component',
      url: 'text',
      type: 'Component',
    },
    {
      name: 'Paragraph',
      subtitle: 'Component',
      url: 'paragraph',
      type: 'Component',
    },
    {
      name: 'Section',
      subtitle: 'Component',
      url: 'section',
      type: 'Component',
    },
  ],
};

export default data;

import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Stack';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'stack-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'StackProps',
    },
  ],
  defaultExample: {
    image: 'stack-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-stack.example.html',
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
        '- Use Stack when you need to arrange elements vertically or horizontally with consistent spacing.\n\n- Stack is particularly useful for forms, lists, and any content that needs to flow vertically or horizontally.\n\n- Consider using Stack when you need to maintain consistent rhythm between elements in a single direction.',
    },
  ],
  related: [],
};

export default data;

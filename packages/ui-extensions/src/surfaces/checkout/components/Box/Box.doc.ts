import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Box';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'box-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'BoxProps',
    },
  ],
  defaultExample: {
    image: 'box-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-box.example.html',
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
        "- Use Box when you need a container that preserves the natural size of its contents.\n\n- Box is particularly useful in layout components like Stack where you want to prevent children from stretching to fit.\n\n- Box has a `display: block` layout by default.\n\n- Use Box for simple container needs where you don't need the additional features of more specialized components like Stack.\n\n- Consider using Box when you need to apply specific styling or layout properties to a group of elements without affecting their natural dimensions.",
    },
  ],
  related: [],
};

export default data;

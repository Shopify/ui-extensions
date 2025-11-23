import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'The `Box` component displays a generic container with consistent spacing and styling. Use it to apply padding, to nest and group other components, or as the foundation for building structured layouts.' +
    '\n\nThe component provides granular control over spacing through padding properties and sizing through width/height properties, serving as a building block for precise layouts. It simplifies the creation of containers with consistent spacing by using design system tokens, ensuring visual consistency and reducing the need for custom CSS in most layout scenarios.' +
    '\n\n`Box` components provide shorthand properties for common padding patterns like equal padding on all sides or symmetric horizontal/vertical padding, reducing verbose property specifications for simpler layouts.',
  thumbnail: 'box-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the `Box` component.',
      type: 'Box',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'box-default.png',
    description:
      'Create flexible layouts using the `Box` component with configurable spacing, borders, and background colors. This example demonstrates a basic box container with padding and styling.',
    codeblock: {
      title: 'Create a container with a box',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
};

export default data;

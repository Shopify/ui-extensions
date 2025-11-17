import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Divider',
  description:
    'The `Divider` component creates a visual separation between content sections. Use dividers to organize information and improve content hierarchy by providing clear section boundaries.' +
    '\n\nThe component renders a subtle horizontal line that follows design system specifications for color and thickness, maintaining visual consistency across the interface. It provides a clean way to separate content groups without adding significant visual weight, helping merchants scan and understand interface structure through strategic content segmentation.' +
    '\n\n`Divider` components support both full-width and inset dividers with configurable margins, allowing precise control over visual separation without adding custom CSS for common divider placement patterns.',
  thumbnail: 'divider-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Divider` component.',
      type: 'Divider',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'divider-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'HTML',
        },
      ],
    },
  },
  related: [],
};

export default data;

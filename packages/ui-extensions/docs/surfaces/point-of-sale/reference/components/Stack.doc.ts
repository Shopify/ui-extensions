import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stack',
  description:
    'A container for other components that allows them to be stacked horizontally or vertically. When building complex UIs, this will be your primary building block.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Stack',
      description: '',
      type: 'StackProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;

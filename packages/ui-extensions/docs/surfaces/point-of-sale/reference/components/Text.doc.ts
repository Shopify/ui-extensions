import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'Text can be rendered in different sizes and colors in order to structure content.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Text',
      description: '',
      type: 'TextProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;

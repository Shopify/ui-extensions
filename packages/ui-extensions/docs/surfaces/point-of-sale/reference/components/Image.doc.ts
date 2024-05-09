import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'The image component displays an image to a merchant in Shopify POS.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Image',
      description: '',
      type: 'ImageProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;

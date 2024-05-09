import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'Buttons enable the merchant to initiate actions, like "add", "save", or "next".',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Button',
      description: '',
      type: 'ButtonProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;

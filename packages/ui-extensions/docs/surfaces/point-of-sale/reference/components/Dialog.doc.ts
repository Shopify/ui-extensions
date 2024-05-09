import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Dialog',
  description:
    'A dialog is a high-priority, intentionally disruptive message that requires action from the merchant before they can continue using POS.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Dialog',
      description: '',
      type: 'DialogProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;

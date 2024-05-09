import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Spacing',
  description:
    'Set of spacing constants to be used in the UI Extensions components library.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'VerticalSpacing',
      description: '',
      type: 'VerticalSpacing',
    },
    {
      title: 'HorizontalSpacing',
      description: '',
      type: 'HorizontalSpacing',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;

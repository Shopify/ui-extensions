import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Section',
  description:
    'A component used to group other components together in a card-like UI. Usually, sections will be used inside a ScrollView.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Section',
      description: '',
      type: 'SectionProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;

import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'Badges are used to inform merchants of the status of an item or action that’s been taken.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Badge',
      description: '',
      type: 'BadgeProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;

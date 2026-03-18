import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Empty state',
  description:
    'The empty state component displays a placeholder view when there is no content to show. Use it to guide users on what to do next, such as adding new items or performing actions to populate the view.',
  thumbnail: 'emptystate-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the empty state component.',
      type: 'EmptyState',
    },
    {
      title: 'Slots',
      description:
        'The empty state component supports slots for adding graphics and actions. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'EmptyStateSlots',
    },
  ],
  category: 'Web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'emptystate-default.png',
    description:
      'Create layouts using an empty state component. This example demonstrates a basic empty state container.',
    codeblock: {
      title: 'Create a generic empty state',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [],
  related: [],
};

export default data;

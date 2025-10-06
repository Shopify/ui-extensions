import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ChoiceList';
import choiceSharedContent from '../../../../docs/shared/components/Choice';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/choicelist.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ChoiceList',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ChoiceListEvents',
    },
    {
      title: choiceSharedContent.name,
      description: choiceSharedContent.description,
      type: 'Choice',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ChoiceSlots',
    },
  ],
  defaultExample: {
    image: 'choicelist-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates a basic ChoiceList with single selection, showing how to create a group of radio button choices for product visibility options.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a ChoiceList with multiple selection enabled, allowing users to choose multiple checkout options with additional descriptive details for each choice.',
            codeblock: {
              title: 'Multiple selections',
              tabs: [
                {
                  code: './examples/multiple-selections.html',
                  language: 'html',
                },

                {
                  code: './examples/multiple-selections.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to display an error message in a ChoiceList when an invalid selection is made or a validation constraint is not met.',
            codeblock: {
              title: 'With error state',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/with-error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a multiple-selection ChoiceList for shipping methods, with each option including detailed delivery timeframe information.',
            codeblock: {
              title: 'Shipping methods',
              tabs: [
                {
                  code: './examples/shipping-methods.html',
                  language: 'html',
                },

                {
                  code: './examples/shipping-methods.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;

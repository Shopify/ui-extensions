import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/NumberField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/numberfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'NumberField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'NumberFieldEvents',
    },
  ],
  defaultExample: {
    image: 'numberfield-default.png',
    description:
      'Collect a numeric value from merchants with step controls and a defined range. This example shows a number field with a label, placeholder, step increment, and min/max bounds.',
    codeblock: {
      title: 'Add a basic number field',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Add a prefix and suffix to provide context for the expected value, such as a currency symbol or unit. This example shows a price field with a dollar sign prefix, currency suffix, and decimal input mode.',
            codeblock: {
              title: 'Add a prefix and suffix for currency input',
              tabs: [
                {
                  code: './examples/with-prefix-and-suffix.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Display an error message when a value is outside the accepted range or a required field is empty. This example shows a required number field with an error indicating the minimum allowed value.',
            codeblock: {
              title: 'Show a validation error',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Prevent editing by making a number field read-only or fully disabled. This example shows a read-only price field and a disabled tax rate field, both with pre-filled values.',
            codeblock: {
              title: 'Disable or make a number field read-only',
              tabs: [
                {
                  code: './examples/disabled-and-read-only.html',
                  language: 'preview',
                  title: '',
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

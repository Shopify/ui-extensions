import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/TextField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/textfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'TextField',
      description:
        'A text input field that allows users to enter and edit text.',
      type: 'TextField',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TextFieldSlots',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'TextFieldEvents',
    },
  ],
  defaultExample: {
    image: 'textfield-default.png',
    description:
      'Add a single-line text input for collecting short-form information from merchants. This example shows a text field with a label, pre-filled value, and placeholder.',
    codeblock: {
      title: 'Add a basic text field',
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
              'Add an icon to a text field to help merchants quickly identify its purpose. This example shows a text field with a search icon and placeholder text.',
            codeblock: {
              title: 'Add an icon to a text field',
              tabs: [
                {
                  code: './examples/with-icon.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Provide specific error messages to tell merchants what went wrong and what correction is needed. This example shows three text fields contrasting a vague error, a specific validation error, and a business rule error.',
            codeblock: {
              title: 'Provide specific error messages for merchant context',
              tabs: [
                {
                  code: './examples/specific-error-messages-for-merchant-context.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Add a prefix or suffix to provide context for the expected value, such as a country code or card type. This example shows a phone number field with a prefix and a credit card field with a suffix.',
            codeblock: {
              title: 'Add a prefix and suffix',
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
              'Place an interactive element like an icon or button inside a text field using the accessory slot. This example shows a text field with an info icon that triggers a tooltip.',
            codeblock: {
              title: 'Add an accessory to a text field',
              tabs: [
                {
                  code: './examples/with-accessory.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Prevent editing by making a text field read-only or fully disabled. This example shows a read-only store URL that merchants can copy and a disabled account ID.',
            codeblock: {
              title: 'Disable or make a text field read-only',
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

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
    image: 'text-field-default.png',
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
              'Demonstrates a simple text input field for entering a store name with autocomplete turned off, providing a clean and straightforward input experience.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates dynamic interaction between two text fields, where the first input (product title) automatically generates a URL-friendly handle in the second field, showcasing real-time input transformation.',
            codeblock: {
              title: 'Event handling with JavaScript',
              tabs: [
                {
                  code: './examples/event-handling-with-javascript.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Compares two approaches to managing text field state: a controlled component with a predefined value, and an uncontrolled component with a default value that can be modified by the user.',
            codeblock: {
              title: 'Controlled vs uncontrolled',
              tabs: [
                {
                  code: './examples/controlled-vs-uncontrolled.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Showcases a text field enhanced with a search icon and a placeholder, creating a visually intuitive input for searching products.',
            codeblock: {
              title: 'With icon',
              tabs: [
                {
                  code: './examples/with-icon.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the importance of providing clear, actionable, and context-specific error messages that guide merchants toward correct input and understanding.',
            codeblock: {
              title: 'Specific error messages for merchant context',
              tabs: [
                {
                  code: './examples/specific-error-messages-for-merchant-context.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a text field marked as required, ensuring that users must provide input before form submission, with built-in validation support.',
            codeblock: {
              title: 'Required field with validation',
              tabs: [
                {
                  code: './examples/required-field-with-validation.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Displays a text field with a currency prefix and country code suffix, providing visual context and clarity for monetary value input.',
            codeblock: {
              title: 'With prefix and suffix',
              tabs: [
                {
                  code: './examples/with-prefix-and-suffix.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Highlights the art of providing concise, helpful additional information below text fields, balancing between informative guidance and potential information overload.',
            codeblock: {
              title: 'Progressive disclosure with details',
              tabs: [
                {
                  code: './examples/progressive-disclosure-with-details.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the flexibility of adding interactive elements like buttons to text fields, enabling immediate actions based on the entered input.',
            codeblock: {
              title: 'With accessory',
              tabs: [
                {
                  code: './examples/with-accessory.html',
                  language: 'preview',
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

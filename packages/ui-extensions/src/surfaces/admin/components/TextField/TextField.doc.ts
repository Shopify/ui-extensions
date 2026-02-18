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
  examples: {
    description: 'Component examples',
    examples: [
      {
        image: 'text-field-default.png',
        codeblock: {
          title: 'Default',
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
      {
        description:
          'Showcases a text field enhanced with a search icon and a placeholder, creating a visually intuitive input for searching products.',
        codeblock: {
          title: 'With icon',
          tabs: [
            {
              code: './examples/with-icon.html',
              language: 'html',
            },
            {
              code: './examples/with-icon.jsx',
              language: 'preview-jsx',
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
              language: 'html',
            },
            {
              code: './examples/specific-error-messages-for-merchant-context.jsx',
              language: 'preview-jsx',
            },
          ],
        },
      },
      {
        description: 'Displays text field usage with prefix and suffix',
        codeblock: {
          title: 'With prefix and suffix',
          tabs: [
            {
              code: './examples/with-prefix-and-suffix.html',
              language: 'html',
            },
            {
              code: './examples/with-prefix-and-suffix.jsx',
              language: 'preview-jsx',
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
              language: 'html',
            },
            {
              code: './examples/with-accessory.jsx',
              language: 'preview-jsx',
            },
          ],
        },
      },
      {
        description:
          'Shows text fields in read-only and disabled states. Use `readOnly` for values that should be visible but not editable, and `disabled` when the field should not be interactive.',
        codeblock: {
          title: 'Disabled and read-only states',
          tabs: [
            {
              code: './examples/disabled-and-read-only.html',
              language: 'html',
            },
            {
              code: './examples/disabled-and-read-only.jsx',
              language: 'preview-jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;

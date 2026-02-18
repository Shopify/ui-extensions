import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/EmailField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/emailfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'EmailField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'EmailFieldEvents',
    },
  ],
  examples: {
    description: 'Component examples',
    examples: [
      {
        description:
          'Collect an email address from merchants with a labeled input and helper text. This example shows a basic email field with a placeholder and details text.',
        image: 'emailfield-default.png',
        codeblock: {
          title: 'Add a basic email field',
          tabs: [
            { code: './examples/default.html', language: 'html' },
            { code: './examples/default.jsx', language: 'preview-jsx' },
          ],
        },
      },
      {
        description:
          'Display an error message and help text to guide merchants toward entering a valid email. This example shows a required email field with both a details hint and an error message.',
        codeblock: {
          title: 'Show an error with help text',
          tabs: [
            { code: './examples/with-error-and-help-text.html', language: 'html' },
            { code: './examples/with-error-and-help-text.jsx', language: 'preview-jsx' },
          ],
        },
      },
      {
        description:
          'Display an existing email address that merchants can see but not edit. This example shows a read-only email field with a pre-filled value.',
        codeblock: {
          title: 'Make an email field read-only',
          tabs: [
            { code: './examples/read-only-display.html', language: 'html' },
            { code: './examples/read-only-display.jsx', language: 'preview-jsx' },
          ],
        },
      },
      {
        description:
          'Disable an email field to prevent all interaction while keeping the value visible. This example shows a disabled field with a pre-filled email address.',
        codeblock: {
          title: 'Disable an email field',
          tabs: [
            { code: './examples/disabled-state.html', language: 'html' },
            { code: './examples/disabled-state.jsx', language: 'preview-jsx' },
          ],
        },
      },
      {
        description:
          'Set minimum and maximum character lengths to add validation beyond the standard email format check. This example shows a required email field with minLength and maxLength constraints.',
        codeblock: {
          title: 'Set character length constraints',
          tabs: [
            { code: './examples/with-length-constraints.html', language: 'html' },
            { code: './examples/with-length-constraints.jsx', language: 'preview-jsx' },
          ],
        },
      },
      {
        description:
          'Validate the email address in real time and update the error message as the merchant types. This example shows an email field with dynamic validation using a regex pattern.',
        codeblock: {
          title: 'Validate an email address dynamically',
          tabs: [
            {
              code: './examples/validation-example.jsx',
              language: 'preview-jsx',
              layout: 'formWrapper',
            },
          ],
        },
      },
    ],
  },
};

export default data;

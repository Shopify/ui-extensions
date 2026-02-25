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
  defaultExample: {
    image: 'emailfield-default.png',
    description:
      'Collect an email address from merchants with a labeled input and helper text. This example shows a basic email field with a placeholder and details text.',
    codeblock: {
      title: 'Add a basic email field',
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
              'Display an error message and help text to guide merchants toward entering a valid email. This example shows a required email field with both a details hint and an error message.',
            codeblock: {
              title: 'Show an error with help text',
              tabs: [
                {
                  code: './examples/with-error-and-help-text.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Display an existing email address that merchants can see but not edit. This example shows a read-only email field with a pre-filled value.',
            codeblock: {
              title: 'Make an email field read-only',
              tabs: [
                {
                  code: './examples/read-only-display.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Disable an email field to prevent all interaction while keeping the value visible. This example shows a disabled field with a pre-filled email address.',
            codeblock: {
              title: 'Disable an email field',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set minimum and maximum character lengths to add validation beyond the standard email format check. This example shows a required email field with minLength and maxLength constraints.',
            codeblock: {
              title: 'Set character length constraints',
              tabs: [
                {
                  code: './examples/with-length-constraints.html',
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

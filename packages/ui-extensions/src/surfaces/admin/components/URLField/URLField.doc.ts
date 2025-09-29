import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/URLField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/urlfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'URLField',
      description: '',
      type: 'URLField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'URLFieldEvents',
    },
  ],
  defaultExample: {
    image: 'urlfield-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          title: 'HTML',
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
              'Demonstrates a simple URL input field with a label and placeholder, showing the minimal configuration needed for collecting a URL.',
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
              'Shows a URL input field with built-in validation, including required status, minimum and maximum length constraints, and a custom error message for invalid inputs.',
            codeblock: {
              title: 'With validation',
              tabs: [
                {
                  code: './examples/with-validation.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a URL field pre-populated with a default value, set to read-only mode to prevent user modifications.',
            codeblock: {
              title: 'With default value',
              tabs: [
                {
                  code: './examples/with-default-value.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a controlled URL field with an empty initial value and a descriptive placeholder, ready for programmatic value management.',
            codeblock: {
              title: 'Controlled component',
              tabs: [
                {
                  code: './examples/controlled-component.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows a URL field in a disabled state, displaying a pre-filled URL that cannot be edited by the user.',
            codeblock: {
              title: 'Disabled state',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how multiple URL fields can be integrated into a form layout using Polaris layout components like s-box and s-stack.',
            codeblock: {
              title: 'Form integration with layout',
              tabs: [
                {
                  code: './examples/form-integration-with-layout.html',
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

import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/URLField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/urlfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'URLField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/polaris/using-polaris-web-components#event-handling).',
      type: 'URLFieldEvents',
    },
  ],
  defaultExample: {
    description:
      'Create a text field optimized for URL input with a label and placeholder. Click to interact with the preview.',
    codeblock: {
      title: 'Collect a URL',
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
        title: '',
        examples: [
          {
            description:
              'Set required status, length constraints, and custom error messages. Click to interact with the preview.',
            codeblock: {
              title: 'Set validation constraints',
              tabs: [
                {
                  code: './examples/with-validation.html',
                  language: 'html',
                },

                {
                  code: './examples/with-validation.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Pre-populate the field with a URL in read-only mode. Click to interact with the preview.',
            codeblock: {
              title: 'Pre-fill a URL',
              tabs: [
                {
                  code: './examples/with-default-value.html',
                  language: 'html',
                },

                {
                  code: './examples/with-default-value.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Display a pre-filled URL that can\'t be edited. Click to interact with the preview.',
            codeblock: {
              title: 'Show a disabled field',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Validate the URL format in real time as the user types. Click to interact with the preview.',
            codeblock: {
              title: 'Validate URL in real time',
              tabs: [
                {
                  code: './examples/validate-url-input.jsx',
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

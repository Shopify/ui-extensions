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
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'URLFieldEvents',
    },
  ],
  defaultExample: {
    description:
      'Capture web addresses from users with URL-specific input. This example shows a labeled field with placeholder text guiding the expected format. Click to interact with the preview.',
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
              'Enforce URL requirements before form submission. This example shows required validation with length constraints and custom error messages. Click to interact with the preview.',
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
              'Display a URL for reference without allowing changes. This example shows a read-only field pre-populated with a store URL. Click to interact with the preview.',
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
              'Display a URL that users can view but not change. This example shows a disabled field with a pre-filled value that prevents editing. Click to interact with the preview.',
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
              'Provide immediate feedback on URL validity. This example shows real-time validation that checks the URL format as the user types. Click to interact with the preview.',
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

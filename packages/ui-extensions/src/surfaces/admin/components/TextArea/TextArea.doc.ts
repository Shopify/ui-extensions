import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/TextArea';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/textarea.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextArea',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'TextAreaEvents',
    },
  ],
  defaultExample: {
    image: 'textarea-default.png',
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
              'Demonstrates a simple text area for collecting product descriptions with a placeholder and autocomplete disabled.',
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
              'Showcases a text area for writing SEO meta descriptions with a character limit of 160, providing guidance text and a multi-line input.',
            codeblock: {
              title: 'Seo meta description with character limit',
              tabs: [
                {
                  code: './examples/seo-meta-description-with-character-limit.html',
                  language: 'html',
                },

                {
                  code: './examples/seo-meta-description-with-character-limit.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the error state of a text area with a minimum length requirement, showing how validation errors are displayed in a commerce context.',
            codeblock: {
              title: 'With error state',
              tabs: [
                {
                  code: './examples/error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows text areas in read-only and disabled states. Use `readOnly` for content that should be visible but not editable, and `disabled` when the field should not be interactive.',
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
    ],
  },
};

export default data;

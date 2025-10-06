import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ColorField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/color-field.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ColorField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ColorFieldEvents',
    },
  ],
  defaultExample: {
    image: 'color-field-default.png',
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
              'Standard color input field for brand color selection with hex value.',
            codeblock: {
              title: 'Basic Usage (Web Component)',
              tabs: [
                {
                  code: './examples/basic-usage-web-component.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage-web-component.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Required color field ensuring merchants provide essential brand colors.',
            codeblock: {
              title: 'Basic Usage (Required)',
              tabs: [
                {
                  code: './examples/basic-usage-required.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage-required.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Color field supporting alpha channel for background and overlay colors.',
            codeblock: {
              title: 'With Alpha Transparency',
              tabs: [
                {
                  code: './examples/with-alpha-transparency.html',
                  language: 'html',
                },

                {
                  code: './examples/with-alpha-transparency.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Color field with validation error for invalid color format inputs.',
            codeblock: {
              title: 'With Error State',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/with-error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Color field with contextual details explaining color usage in brand identity.',
            codeblock: {
              title: 'With Help Text',
              tabs: [
                {
                  code: './examples/with-help-text.html',
                  language: 'html',
                },

                {
                  code: './examples/with-help-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Color field demonstrating how to use a placeholder to guide user input for color selection.',
            codeblock: {
              title: 'With Placeholder',
              tabs: [
                {
                  code: './examples/with-placeholder.html',
                  language: 'html',
                },

                {
                  code: './examples/with-placeholder.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Color field in a read-only mode, preventing user modifications to the color value.',
            codeblock: {
              title: 'Read Only State',
              tabs: [
                {
                  code: './examples/read-only-state.html',
                  language: 'html',
                },

                {
                  code: './examples/read-only-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'A multi-color field form section demonstrating how ColorField can be used to capture different color settings in a single form.',
            codeblock: {
              title: 'Form Integration',
              tabs: [
                {
                  code: './examples/form-integration.html',
                  language: 'html',
                },

                {
                  code: './examples/form-integration.jsx',
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

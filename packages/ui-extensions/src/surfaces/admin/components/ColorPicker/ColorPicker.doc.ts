import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ColorPicker';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/color-picker.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use the alpha slider if you want to allow merchants to select a transparent color`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ColorPicker',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ColorPickerEvents',
    },
  ],
  defaultExample: {
    description:
      'Create a color picker with alpha transparency enabled. Click to interact with the preview.',
    codeblock: {
      title: 'Pick a color with transparency',
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
              'Create a solid color picker without transparency support. Click to interact with the preview.',
            codeblock: {
              title: 'Pick a solid color',
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
              'Enable alpha transparency to select colors with varying opacity levels. Click to interact with the preview.',
            codeblock: {
              title: 'Enable alpha transparency',
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
        ],
      },
    ],
  },
};

export default data;

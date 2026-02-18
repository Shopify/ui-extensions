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
    image: 'color-picker-default.png',
    description:
      'Let users visually select colors with an interactive picker. This example shows a basic color picker with hue and saturation controls. Click to interact with the preview.',
    codeblock: {
      title: 'Pick a color',
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
              'Allow users to select semi-transparent colors. This example shows a color picker with an alpha slider for adjusting opacity levels. Click to interact with the preview.',
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

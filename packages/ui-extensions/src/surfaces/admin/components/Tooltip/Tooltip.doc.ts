import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Tooltip';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/tooltip.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Slots',
      description: '',
      type: 'TooltipSlots',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TooltipSlots',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
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
              'Demonstrates a simple tooltip that provides additional context for a text element when hovered or focused.',
            codeblock: {
              title: 'Basic Usage',
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
              "Shows how to add a tooltip to an icon button, providing a clear explanation of the button's action when hovered.",
            codeblock: {
              title: 'With Icon Button',
              tabs: [
                {
                  code: './examples/with-icon-button.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates using a tooltip to provide additional explanation for a form field, with a help icon next to the label that triggers the tooltip.',
            codeblock: {
              title: 'Form Field Help',
              tabs: [
                {
                  code: './examples/form-field-help.html',
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

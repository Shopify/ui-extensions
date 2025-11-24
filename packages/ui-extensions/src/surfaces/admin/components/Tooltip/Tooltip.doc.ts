import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Tooltip';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/tooltip.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Usage',
      type: 'Generic' as const,
      anchorLink: 'usage',
      sectionContent: `Tooltips only render on devices with a pointer and do not display on mobile devices.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use for additional, non-essential context only
- Provide for icon-only buttons or buttons with keyboard shortcuts
- Keep content concise and in sentence case
- Don't use for critical information, errors, or blocking messages
- Don't contain any links or buttons
- Use sparingly. If you need many tooltips, clarify the design and language instead`,
    },
  ],
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
          customStyles: {
            minHeight: '200px',
          },
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'inline',
          customStyles: {
            minHeight: '200px',
          },
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
                  language: 'html',
                  layout: 'inline',
                  customStyles: {
                    minHeight: '200px',
                  },
                },
                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                  layout: 'inline',
                  customStyles: {
                    minHeight: '200px',
                  },
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
                  language: 'html',
                  layout: 'inline',
                  customStyles: {
                    minHeight: '200px',
                  },
                },
                {
                  code: './examples/with-icon-button.jsx',
                  language: 'preview-jsx',
                  layout: 'inline',
                  customStyles: {
                    minHeight: '200px',
                  },
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

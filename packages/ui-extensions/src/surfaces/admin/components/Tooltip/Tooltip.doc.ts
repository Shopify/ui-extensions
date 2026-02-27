import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Tooltip';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/tooltip.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use tooltips for helpful but non-essential information:** The component works best for supplementary details that enhance understanding without being critical. Never hide essential information, errors, or required instructions in tooltips.
- **Perfect for icon-only buttons:** Icon buttons need tooltips to clarify what they do. Include the button's action and keyboard shortcut if available to help merchants work efficiently.
- **Keep tooltip content brief and clear:** Aim for a short sentence or phrase. Long tooltip content is hard to read and suggests the information might need a more prominent placement in the UI.
- **Recognize when tooltips indicate a design problem:** If you're adding many tooltips to explain your interface, the design itself might be unclear. Consider improving labels, layout, or information architecture instead.
- **Remember they're desktop-only:** Tooltips don't work on touch devices. If the information is important enough to need a tooltip, consider making it visible by default on mobile.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Tooltips only appear on devices with a mouse or trackpad. They don't work on touch devices like phones and tablets, which limits their usefulness for mobile merchants.
- Tooltips can't contain interactive elements like links or buttons. They dismiss when the user moves away, making interaction impossible.
- The component doesn't provide built-in positioning controls. Tooltip placement is automatic and might not always appear in the ideal location for complex layouts.`,
    },
  ],
  definitions: [
    {
      title: 'Slots',
      description:
        'The tooltip component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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

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
    description:
      'Create a tooltip that provides supplementary information when a user hovers or focuses on a trigger element. This example shows a tooltip describing a toolbar button\'s action.',
    codeblock: {
      title: 'Add a basic tooltip',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
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
        title: '',
        examples: [
          {
            description:
              'Attach a tooltip to inline text to provide a definition or additional context on hover. This example shows a tooltip triggered by a text label that explains the shipping status.',
            codeblock: {
              title: 'Explain a term with a tooltip on text',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
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
              'Add a tooltip to an icon-only button to clarify its action for sighted users and provide an accessible description. This example shows an info button that displays a tooltip with product details on hover.',
            codeblock: {
              title: 'Describe an icon-only button with a tooltip',
              tabs: [
                {
                  code: './examples/with-icon-button.html',
                  language: 'preview',
                  title: '',
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
              'Include a keyboard shortcut in a tooltip to help merchants discover faster ways to perform actions. This example shows a Save button with a tooltip that displays the keyboard shortcut.',
            codeblock: {
              title: 'Show a keyboard shortcut in a tooltip',
              tabs: [
                {
                  code: './examples/keyboard-shortcut.html',
                  language: 'preview',
                  title: '',
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

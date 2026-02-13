import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Button';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/button.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Label buttons clearly:** Use strong, actionable verbs that clearly and accurately describe the action (like **Save**, **Edit**, or **Add tags**). Write labels in sentence case and avoid unnecessary words and articles (like **a**, **an**, **the**). Don't use punctuation.
- **Use appropriate button tones:** Apply established button tones appropriately. Use critical tone only for destructive actions that are difficult or impossible to undo. Match the tone to the action's impact and importance.
- **Establish clear hierarchy:** Prioritize the most important actions to avoid confusion. Use primary buttons for main actions, secondary buttons for supporting actions, and tertiary buttons for supplementary actions.
- **Position consistently:** Place buttons in consistent locations throughout the interface to create predictable interaction patterns.
- **Icon-only buttons:** For icon-only buttons, always use \`accessibilityLabel\` to describe the action for screen reader users.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- When using \`href\` for navigation, external URLs (domains outside Shopify admin) might be blocked or show security warnings depending on the extension context and merchant's browser security settings.
- Setting \`loading={true}\` provides visual feedback and prevents form submission or multiple clicks. You must implement additional logic to debounce or disable the button action during async operations.
- Icon-only buttons have a minimum touch target size but don't expand to fill available space. They maintain a fixed size based on the icon and padding, which might create layout inconsistencies if mixed with text buttons in the same container.
- Disabled buttons (\`disabled={true}\`) are removed from the tab order and can't receive keyboard focus. If you disable a button temporarily (for example, while waiting for form validation), then provide visible text explaining why it's disabled. For async operations, use \`loading\` over \`disabled\` because \`loading\` communicates that an action is in progress.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Button component.',
      type: 'Button',
    },
    {
      title: 'Events',
      description:
        'The Button component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ButtonEvents',
    },
    {
      title: 'Slots',
      description:
        'The Button component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'ButtonSlots',
    },
  ],
  defaultExample: {
    image: 'button-default.png',
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
          layout: 'inline',
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
              'Demonstrates a simple button with default styling, automatically determining its visual variant and using a clear, action-oriented label.',
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
              'Showcases different button variants with varying visual emphasis, helping merchants understand action priorities through distinct styling.',
            codeblock: {
              title: 'Variants',
              tabs: [
                {
                  code: './examples/variants.html',
                  language: 'html',
                },

                {
                  code: './examples/variants.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates button tones that signal the semantic importance and potential impact of different actions through color and styling.',
            codeblock: {
              title: 'Tones',
              tabs: [
                {
                  code: './examples/tones.html',
                  language: 'html',
                },

                {
                  code: './examples/tones.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a button that combines a descriptive text label with an intuitive icon, enhancing visual communication of the action.',
            codeblock: {
              title: 'With icon',
              tabs: [
                {
                  code: './examples/with-icon.html',
                  language: 'html',
                },

                {
                  code: './examples/with-icon.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates an icon-only button with an accessibility label, providing a compact interface that remains screen reader friendly.',
            codeblock: {
              title: 'Icon-only button',
              tabs: [
                {
                  code: './examples/icon-only-button.html',
                  language: 'html',
                },

                {
                  code: './examples/icon-only-button.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates buttons in various loading states, providing visual feedback during asynchronous operations.',
            codeblock: {
              title: 'Loading state',
              tabs: [
                {
                  code: './examples/loading-state-for-merchant-actions.html',
                  language: 'html',
                },

                {
                  code: './examples/loading-state-for-merchant-actions.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates buttons in different interaction states, showing how to represent disabled controls and submit actions within forms.',
            codeblock: {
              title: 'Form states',
              tabs: [
                {
                  code: './examples/form-states.html',
                  language: 'html',
                },

                {
                  code: './examples/form-states.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases buttons that act as hyperlinks, supporting navigation to different pages, external resources, and file downloads.',
            codeblock: {
              title: 'Link buttons',
              tabs: [
                {
                  code: './examples/link-buttons.html',
                  language: 'html',
                },

                {
                  code: './examples/link-buttons.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a button group with carefully aligned actions, showing how to create a clear visual hierarchy for form submission and cancellation.',
            codeblock: {
              title: 'Form submission buttons',
              tabs: [
                {
                  code: './examples/product-save-form.html',
                  language: 'html',
                },

                {
                  code: './examples/product-save-form.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a button pair for destructive actions, using a critical tone to emphasize the potentially irreversible nature of the operation.',
            codeblock: {
              title: 'Delete confirmation',
              tabs: [
                {
                  code: './examples/delete-confirmation.html',
                  language: 'html',
                },

                {
                  code: './examples/delete-confirmation.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a navigation button with an icon, enabling quick access to different sections of the interface.',
            codeblock: {
              title: 'Navigation button with icon',
              tabs: [
                {
                  code: './examples/navigation-to-admin-sections.html',
                  language: 'html',
                },

                {
                  code: './examples/navigation-to-admin-sections.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a button group for executing operations on multiple selected items.',
            codeblock: {
              title: 'Button group for bulk operations',
              tabs: [
                {
                  code: './examples/bulk-actions.html',
                  language: 'html',
                },

                {
                  code: './examples/bulk-actions.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a set of compact, icon-only buttons with accessibility labels, perfect for creating dense interfaces.',
            codeblock: {
              title: 'Icon-only buttons with labels',
              tabs: [
                {
                  code: './examples/toolbar-icon-buttons.html',
                  language: 'html',
                },

                {
                  code: './examples/toolbar-icon-buttons.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates advanced button capabilities using `command`, `commandFor`, and `interestFor` properties to enable dynamic component communication.',
            codeblock: {
              title: 'Component interactions',
              tabs: [
                {
                  code: './examples/component-interactions.html',
                  language: 'html',
                },

                {
                  code: './examples/component-interactions.jsx',
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

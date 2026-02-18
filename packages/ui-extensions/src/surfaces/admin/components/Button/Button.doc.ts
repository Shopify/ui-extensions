import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Button';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/button.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Taking primary actions like saving or creating resources
- Taking secondary actions like canceling forms or filtering results
- Triggering destructive operations like deletion or disconnection
- Accessing supplementary actions via tertiary buttons`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Be clearly and accurately labeled with strong, actionable verbs
- Use established button tones appropriately (e.g., critical tone only for actions that are difficult to undo)
- Prioritize the most important actions to avoid confusion
- Be positioned in consistent locations in the interface
- Use buttons for actions and links for navigation`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `- Use simple, concise verbs (e.g., "Save", "Edit", "Add tags")
- Write in sentence case
- Avoid unnecessary words and articles (e.g., "a", "an", "the")
- Don't use punctuation
- For icon-only buttons, use \`accessibilityLabel\` to describe the action`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Button',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ButtonEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ButtonSlots',
    },
  ],
  examples: {
    description: 'Component examples',
    examples: [
      {
        image: 'button-default.png',
        codeblock: {
          title: 'Default',
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
};

export default data;

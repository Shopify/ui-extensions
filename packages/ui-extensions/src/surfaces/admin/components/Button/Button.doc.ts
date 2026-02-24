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
        description:
          'Create a button with a text label to let merchants trigger an action. This example shows the basic button component with default styling.',
        codeblock: {
          title: 'Add a basic button',
          tabs: [
            {
              code: './examples/basic-button.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Create buttons for actions like saving, creating, or navigating. This example shows primary and secondary buttons with clear, action-oriented labels.',
        image: 'button-default.png',
        codeblock: {
          title: 'Add primary and secondary buttons',
          tabs: [
            {
              code: './examples/default.html',
              language: 'html',
              layout: 'inline',
            },
          ],
        },
      },
      {
        description:
          'Use variants to establish a clear visual hierarchy between primary, secondary, and supplementary actions. This example shows all four variant options: primary, secondary, tertiary, and auto.',
        codeblock: {
          title: 'Set visual emphasis with variants',
          tabs: [
            {
              code: './examples/variants.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Apply tones to signal the purpose and potential impact of an action through color. This example shows critical tone for destructive actions, neutral tone for less prominent actions, and the default auto tone.',
        codeblock: {
          title: 'Communicate intent with tones',
          tabs: [
            {
              code: './examples/tones.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Combine an icon with a text label to help merchants identify what a button does. This example shows a button with both a text label and an icon to reinforce the action.',
        codeblock: {
          title: 'Add an icon alongside a text label',
          tabs: [
            {
              code: './examples/with-icon.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Create icon-only buttons to save space in dense interfaces like toolbars and action bars. This example shows multiple icon-only buttons with an `accessibilityLabel` for screen reader support.',
        codeblock: {
          title: 'Create compact icon-only buttons for toolbars',
          tabs: [
            {
              code: './examples/icon-only-button.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Add a loading state to prevent duplicate submissions and reassure merchants that an action is being processed. This example shows buttons with the loading prop across different variants.',
        codeblock: {
          title: 'Show loading feedback during async operations',
          tabs: [
            {
              code: './examples/loading-state-for-merchant-actions.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Disable buttons to prevent interaction when prerequisites are not met, and set type to submit to integrate with HTML forms. This example shows a disabled button alongside a submit button.',
        codeblock: {
          title: 'Disable buttons and submit forms',
          tabs: [
            {
              code: './examples/form-states.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Set the `href` property to make buttons navigate like links while maintaining button styling. This example shows internal navigation, opening external URLs in new tabs, and triggering file downloads.',
        codeblock: {
          title: 'Use buttons for navigation and downloads',
          tabs: [
            {
              code: './examples/link-buttons.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Pair a cancel button with a critical-toned action button to help merchants avoid accidental destructive operations. This example shows a confirmation pattern for deleting a resource.',
        codeblock: {
          title: 'Confirm destructive actions with critical tone',
          tabs: [
            {
              code: './examples/delete-confirmation.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Use `commandFor` to connect a button to another component by ID, triggering built-in actions like toggling a popover or showing a modal. This example shows a button that opens a popover with a list of additional actions.',
        codeblock: {
          title: 'Trigger actions on other components',
          tabs: [
            {
              code: './examples/component-interactions.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;

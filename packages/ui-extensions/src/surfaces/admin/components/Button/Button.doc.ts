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
        'Configure the following properties on the button component.',
      type: 'Button',
    },
    {
      title: 'Events',
      description:
        'The button component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'ButtonEvents',
    },
    {
      title: 'Slots',
      description:
        'The button component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/app-ui/using-polaris-web-components#slots).',
      type: 'ButtonSlots',
    },
  ],
  defaultExample: {
    image: 'button-default.png',
    description:
      'Create a button with a text label to let merchants trigger an action. This example shows the basic button component with default styling.',
    codeblock: {
      title: 'Add a basic button',
      tabs: [
        {
          code: './examples/basic-button.html',
          language: 'preview',
          title: '',
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
              'Create buttons for actions like saving, creating, or navigating. This example shows primary and secondary buttons with clear, action-oriented labels.',
            codeblock: {
              title: 'Add primary and secondary buttons',
              tabs: [
                {
                  code: './examples/default.html',
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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

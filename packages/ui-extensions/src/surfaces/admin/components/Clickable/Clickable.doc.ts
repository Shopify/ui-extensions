import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Clickable';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/clickable.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Provide accessibility labels:** Always include \`accessibilityLabel\` for elements without visible text to ensure screen reader users understand the element's purpose.
- **Choose appropriate modes:** Use button mode for triggering actions, link mode for navigation, and submit mode for form submissions.
- **Indicate disabled state:** When disabling clickable elements, provide clear visual feedback and explanatory text about why the element's unavailable.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the clickable component.',
      type: 'Clickable',
    },
    {
      title: 'Events',
      description:
        'The clickable component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-web-components#handling-events).',
      type: 'ClickableEvents',
    },
    {
      title: 'Slots',
      description:
        'The clickable component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/app-ui/using-web-components#slots).',
      type: 'ClickableSlots',
    },
  ],
  defaultExample: {
    image: 'clickable-default.png',
    description:
      "Build custom interactive elements with flexible styling that [button](/docs/api/{API_NAME}/{API_VERSION}/web-components/actions/button) or [link](/docs/api/{API_NAME}/{API_VERSION}/web-components/actions/link) don't support. This example shows two clickable elements with different background and border styles.",
    codeblock: {
      title: 'Create a custom interactive element',
      tabs: [
        {
          code: './examples/default.html',
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
              'Set the `href` property to make a clickable element navigate like a link. This example shows a clickable component that opens a URL in a new browser tab.',
            codeblock: {
              title: 'Navigate to a URL',
              tabs: [
                {
                  code: './examples/link-mode.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use a clickable component as a form submit button with a disabled state to prevent premature submission. This example shows a disabled submit-type clickable component with a border and padding.',
            codeblock: {
              title: 'Create a form submit button',
              tabs: [
                {
                  code: './examples/form-submit-button.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Add a clickable button alongside descriptive content in a section. This example shows a styled clickable button inside a box with a heading and description.',
            codeblock: {
              title: 'Add a clickable action to a section',
              tabs: [
                {
                  code: './examples/section-with-clickable-action.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Add an accessibility label to provide screen readers with more context than the visible text alone. This example shows a clickable delete button with a descriptive label for assistive technologies.',
            codeblock: {
              title: 'Add an accessibility label',
              tabs: [
                {
                  code: './examples/accessibility-with-aria-attributes.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Disable a clickable link while providing an accessibility label that explains why the feature is unavailable. This example shows a disabled navigation element with a descriptive label for screen readers.',
            codeblock: {
              title: 'Describe a disabled link with an accessibility label',
              tabs: [
                {
                  code: './examples/disabled-link-with-aria.html',
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

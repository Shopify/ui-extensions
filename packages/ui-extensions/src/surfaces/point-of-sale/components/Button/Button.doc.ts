import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'The `Button` component triggers actions or events, such as opening dialogs or navigating to other pages. Use `Button` to let merchants perform specific tasks or to initiate interactions throughout the POS interface.' +
    "\n\n Button content must be plain text. If you nest components inside a button, the button extracts and displays only the text content from those components. For example, placing an `s-icon` inside a button won't display the icon, only its text content. Use of nested interactive components within buttons isn't supported." +
    '\n\nButtons provide clear calls-to-action that guide merchants through workflows, enable form submissions, and trigger important operations. They support various visual styles, tones, and interaction patterns to communicate intent and hierarchy within the interface.' +
    "Loading states replace all button content with a spinner. Custom loading indicators or partial content updates aren't supported.",
  thumbnail: 'button-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Button` component.',
      type: 'Button',
    },
    {
      title: 'Events',
      description:
        'The `Button` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ButtonEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'button-default.png',
    description:
      'Trigger actions using a `Button` component with customizable visual styles and tones. This example shows a basic button with text content.',
    codeblock: {
      title: 'Trigger actions with a button',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Write action-oriented text:** Use specific, actionable language like "Save customer" or "Process payment" rather than generic terms like "OK" or "Submit."
- **Choose appropriate variants and tones:** Use \`primary\` for the main action and \`secondary\` for supporting actions. Use \`critical\` for destructive actions, \`caution\` or \`warning\` for actions requiring attention.
- **Show loading states:** Set \`loading\` to \`true\` during async operations to prevent duplicate submissions.
- **Use command system for component control:** Use \`commandFor\` and \`command\` to control modals and overlays declaratively.
- **Structure hierarchies clearly:** Group related actions together. Separate destructive actions to prevent accidental activation.
`,
    },
  ],
  related: [],
};

export default data;

import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Link',
  description:
    'The link component makes text interactive, allowing users to trigger actions through tappable text. Use it for lightweight interactions, navigation triggers, or actions embedded within text content.' +
    '\n\nLinks support the command system for controlling other components declaratively. Use `command` and `commandFor` to show, hide, or toggle modals and other targetable elements. For primary actions like submitting forms or triggering operations, use [button](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/button) instead.',
  thumbnail: 'link-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the link component.',
      type: 'Link',
    },
    {
      title: 'Events',
      description:
        'The link component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'LinkEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'link-default.png',
    description:
      'Create interactive links using the link component. This example demonstrates basic link usage with onClick handlers for custom actions.',
    codeblock: {
      title: 'Create an interactive link',
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
- **Write clear, descriptive text:** link text should clearly indicate the action or destination, helping users understand what will happen when they tap.
- **Keep text concise:** Use brief, actionable language that doesn't clutter the interface. Links work well embedded within text content.
- **Provide accessibility labels when needed:** Use \`accessibilityLabel\` when the visible text doesn't fully describe the action, especially for short labels like "Edit" or "View".
- **Use the command system for component control:** Use \`command\` (\`--show\`, \`--hide\`, \`--toggle\`, \`--copy\`) with \`commandFor\` to control modals and other components declaratively.
- **Handle onClick for custom logic:** Implement \`onClick\` handlers for actions like showing toasts, updating state, or triggering side effects.
- **Reserve buttons for primary actions:** Use button for prominent actions like "Save" or "Submit". Use link for secondary, embedded, or text-based interactions.
`,
    },
  ],
  related: [],
};

export default data;

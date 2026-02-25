import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'The Button component triggers actions like submitting forms, opening dialogs, or navigating to other pages. It supports multiple visual variants and tones to establish a clear hierarchy of actions within your extension.\n\nFor navigation-focused interactions within text, use [Link](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link). To make a custom area clickable without button styling, use [Pressable](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/pressable).',
  requires: '',
  thumbnail: 'button-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Button component.',
      type: 'ButtonProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'button-default.png',
    description:
      'Sync product data to a warehouse and close the action modal, or cancel. This example renders a `primary` `Button` that posts to a backend API and calls `close()`, alongside a `secondary` cancel button.',
    codeblock: {
      title: 'Sync product to backend',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Button/examples/basic-button.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-button.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Present publish, archive, and delete actions for a product using `variant` and `tone` props to communicate intent. This example uses `primary` for the main action, `tertiary` for a low-emphasis option, and `critical` tone for the destructive delete.',
        codeblock: {
          title: 'Set button variants and tones',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Button/examples/button-variants.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/button-variants.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Link to the product storefront page and documentation using `href` and `target` props. This example renders buttons as external links that open in new tabs, and uses `accessibilityLabel` to provide screen reader context.',
        codeblock: {
          title: 'Open external links',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Button/examples/button-link.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/button-link.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Label buttons clearly:** Use strong, actionable verbs that describe the action, such as **Save**, **Edit**, or **Add tags**. Write labels in sentence case and avoid unnecessary articles like **a**, **an**, or **the**.
- **Use appropriate tones:** Apply \`critical\` tone only for destructive actions that are difficult or impossible to undo, such as deleting a resource. Leave the tone as \`default\` for all other actions.
- **Establish clear hierarchy:** Avoid placing multiple primary buttons in the same view. Reserve \`primary\` for the single most important action, use \`secondary\` for supporting actions, and \`tertiary\` for low-emphasis or supplementary actions.
- **Position consistently:** Place buttons in predictable locations. In [AdminAction](/docs/api/admin-extensions/{API_VERSION}/ui-components/settings-and-templates/adminaction) components, use the \`primaryAction\` and \`secondaryAction\` properties. In [Form](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/form) components, place submit buttons at the bottom of the form.
- **Provide accessibility labels for icon-only usage:** When using a Button without visible text, always set \`accessibilityLabel\` so screen reader users understand the button's purpose.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The Button component doesn't include a built-in loading state. To indicate that an async operation is in progress, consider disabling the button and displaying a nearby [ProgressIndicator](/docs/api/admin-extensions/{API_VERSION}/ui-components/feedback-and-status-indicators/progressindicator) component.
- When using \`href\` for navigation, external URLs (domains outside the Shopify admin) might be blocked or trigger a confirmation dialog depending on the extension context and browser security settings.
- Disabled buttons (\`disabled={true}\`) can't receive focus or be triggered by keyboard, which may cause confusion if the reason for disabling isn't clear to the merchant. Pair disabled states with visible helper text explaining why the action is unavailable.`,
    },
  ],
  related: [],
};

export default data;

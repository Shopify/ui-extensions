import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Button';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'button-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ButtonElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'ButtonElementEvents',
    },
  ],
  defaultExample: {
    image: 'button-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-button.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Add a loading state to prevent duplicate submissions while an async operation completes. This example shows buttons with the `loading` prop across primary and secondary variants during checkout.',
        codeblock: {
          title: 'Show a loading state during async operations',
          tabs: [
            {
              code: './examples/button-loading.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '**Content Best Practices**\n\n- Clearly label each button to accurately represent the action associated with it.\n\n- Use strong actionable verbs at the beginning of button text to make it clear to the user what action will occur when the button is clicked.\n\n**Hierarchy Best Practices**\n\n- Establish a visual hierarchy between buttons to minimize confusion and help users understand which actions are most important.\n\n- Use only one high-emphasis button (primary button) per context to make it clear that other buttons have less importance.\n\n- Use lower-emphasis buttons for secondary calls to action.\n\n- Use primary buttons for actions that progress users through checkout such as "Pay now" or for concluding an action in a modal such as "Apply".\n\n- Use secondary buttons to provide alternative actions to the primary button, without disrupting the primary flow such as "Track your order".\n\n**When to Use Buttons**\n\n- Use buttons to communicate actions the user can take.\n\n- Use buttons to allow users to interact with the page.\n\n**When Not to Use Buttons**\n\n- Don\'t use buttons as navigational elements. Use links instead when the desired action is to take the user to a new page.',
    },
  ],
};

export default data;

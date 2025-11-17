import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Clickable',
  description:
    'The `Clickable` component makes any content interactive to user interactions. Use it to add click interactions to non-interactive elements while maintaining full control over their visual presentation.' +
    "\n\nThis component provides a flexible way to wrap any content and make it respond to user interactions. Unlike buttons, it doesn't impose visual styling, allowing you to create custom interactive elements that match your design requirements while ensuring proper event handling.",
  thumbnail: 'clickable-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Clickable` component.',
      type: 'Clickable',
    },
    {
      title: 'Events',
      description:
        'The `Clickable` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ClickableEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'clickable-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
};

export default data;

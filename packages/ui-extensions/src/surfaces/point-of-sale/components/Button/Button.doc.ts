import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'The `Button` component triggers actions or events, such as opening dialogs or navigating to other pages. Use `Button` to let merchants perform specific tasks or initiate interactions throughout the POS interface.' +
    '\n\nButtons provide clear calls-to-action that guide merchants through workflows, enable form submissions, and trigger important operations. They support various visual styles, tones, and interaction patterns to communicate intent and hierarchy within the interface.',
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
  related: [],
};

export default data;

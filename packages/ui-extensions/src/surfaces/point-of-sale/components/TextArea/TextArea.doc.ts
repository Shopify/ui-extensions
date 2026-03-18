import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text area',
  description:
    'The text area component captures multi-line text input. Use it to collect descriptions, notes, comments, or other extended text content.' +
    '\n\nThe component supports configurable height, character limits, and validation. For single-line text input, use [text field](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/text-field).',
  thumbnail: 'text-area-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the text area component.',
      type: 'TextArea',
    },
    {
      title: 'Slots',
      description:
        'The text area component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TextAreaSlots',
    },
    {
      title: 'Events',
      description:
        'The text area component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TextAreaEvents',
    },
  ],
  category: 'Web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'text-area-default.png',
    description:
      'Capture multi-line text input using a text area component. This example shows a basic text area with a label for extended content.',
    codeblock: {
      title: 'Capture multi-line text with a text area',
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
- **Set appropriate row count:** Use 2-3 \`rows\` for brief notes, 4-6 for descriptions, and more for extensive content.
- **Show character limit feedback:** When approaching \`maxLength\`, display remaining characters in the \`details\` text.
- **Write descriptive labels:** Use specific labels like "Product Description" or "Special Instructions" rather than generic terms.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
The \`accessory\` slot supports only [button](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/actions/button) and [clickable](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/actions/clickable) components. Other component types can't be used for field accessories.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to add accessory buttons, configure visible rows, and handle events.',
    examples: [
      {
        description:
          'Add action buttons to the text area using the accessory slot for quick actions like clearing text or formatting content. This example shows how to use [s-button](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/actions/button) and [s-clickable](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/actions/clickable) components in the accessory slot, providing inline functionality within the multi-line input context.',
        codeblock: {
          title: 'Add accessory buttons',
          tabs: [
            {
              code: './examples/accessory-slot.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Configure the number of visible rows and character limits to control text area size and input length. This example shows how to use the `rows` property to set initial height and `maxlength` to limit content, ensuring appropriate sizing for different types of text input.',
        codeblock: {
          title: 'Configure rows and character limits',
          tabs: [
            {
              code: './examples/rows-configuration.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Subscribe to text area events to respond when merchants enter or modify text. This example demonstrates handling `onChange`, `onInput`, `onFocus`, and `onBlur` events for autosave functionality, character counting, or real-time validation of longer text content.',
        codeblock: {
          title: 'Handle text input events',
          tabs: [
            {
              code: './examples/event-handling.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;

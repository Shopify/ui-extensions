import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'The `TextArea` component captures longer text content with a multi-line, resizable text input area. Use it to collect descriptions, notes, comments, or other extended text input in forms and data entry workflows.' +
    '\n\nThe component provides a multi-line text input area that accommodates longer content. It supports validation and multi-line formatting, making it ideal for capturing detailed information such as order notes, product descriptions, or customer feedback that requires more than single-line input.',
  thumbnail: 'text-area-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TextArea` component.',
      type: 'TextArea',
    },
    {
      title: 'Slots',
      description:
        'The `TextArea` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TextAreaSlots',
    },
    {
      title: 'Events',
      description:
        'The `TextArea` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TextAreaEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Set appropriate row count:** Use 2-3 rows for brief notes, 4-6 for descriptions, and more for extensive content.\n' +
        '- **Show character limit feedback:** When approaching `maxLength`, display remaining characters in the `details` text.\n' +
        '- **Write descriptive labels:** Use specific labels like "Product Description" or "Special Instructions" rather than generic terms.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- `TextArea` provides multi-line text input but doesn't include rich text formatting capabilities—complex formatting like bold, italic, or lists requires alternative solutions or plain text representations.\n" +
        "- The `required` property adds semantic meaning only—it doesn't trigger automatic error display or validation, so you must implement validation logic manually.\n" +
        "- The `accessory` slot supports only `Button` and `Clickable` components—other component types can't be used for field accessories.",
    },
  ],
  defaultExample: {
    image: 'text-area-default.png',
    description:
      'Capture multi-line text input using a `TextArea` component with resizable height. This example shows a basic text area with label for longer content entry.',
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
  related: [],
  examples: {
    description:
      'Learn how to add accessory buttons, configure visible rows, and handle events.',
    examples: [
      {
        description:
          'Add action buttons to the text area using the accessory slot for quick actions like clearing text or formatting content. This example shows how to use `s-button` and `s-clickable` components in the accessory slot, providing inline functionality within the multi-line input context.',
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

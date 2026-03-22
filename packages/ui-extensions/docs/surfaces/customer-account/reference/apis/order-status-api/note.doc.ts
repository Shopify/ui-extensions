import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Note API',
  description:
    'The Note API provides the free-form text note that the buyer left during checkout. Use this API to display special instructions or order requests from the buyer.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      'Read the order note and display it in a text block. This example uses the `useNote` hook and handles the case where the note is `undefined`.',
    codeblock: {
      title: 'Display order note',
      tabs: [
        {
          code: '../../examples/apis/note-display-order-note.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/note-display-order-note.example.ts',
          language: 'js',
          title: 'TS',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        "The `OrderStatusApi` object provides the buyer's note from the order. Access the following properties on the `OrderStatusApi` object to read note data.",
      type: 'Docs_OrderStatus_NoteApi',
    },
    {
      title: 'useNote',
      description:
        'Returns the free-form text note that the buyer left during checkout. The value is `undefined` when no note was provided.',
      type: 'UseNoteGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Handle empty notes**: The note is `undefined` when the buyer didn't provide one. Always check for `undefined` before rendering.\n- **Treat notes as free-form text**: Notes can contain any text the buyer entered. Don't parse them as structured data.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Only a single note is supported per order. There's no way to retrieve multiple notes or a note history.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Check whether a note exists and conditionally display a banner. This example uses `useNote` and only renders the banner when the note value is truthy.',
        codeblock: {
          title: 'Show note presence',
          tabs: [
            {
              code: '../../examples/apis/note-show-note-presence.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/note-show-note-presence.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Read the note and display it as special delivery instructions. This example uses `useNote` and renders the text with a descriptive heading.',
        codeblock: {
          title: 'Display special instructions',
          tabs: [
            {
              code: '../../examples/apis/note-display-special-instructions.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/note-display-special-instructions.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;

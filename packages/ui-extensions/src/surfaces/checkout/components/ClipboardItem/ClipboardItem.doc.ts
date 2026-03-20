import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ClipboardItem';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  isVisualComponent: false,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ClipboardItemElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'ClipboardItemElementEvents',
    },
  ],
  defaultExample: {
    image: 'clipboard-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-clipboard-item.example.html',
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
          'Trigger a clipboard copy from a link instead of a button using `commandFor`. This example demonstrates an `s-link` that copies a tracking URL to the clipboard when clicked.',
        codeblock: {
          title: 'Copy a tracking link with a link trigger',
          tabs: [
            {
              code: './examples/clipboard-link.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;

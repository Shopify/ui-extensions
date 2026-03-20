import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Clickable';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'clickable-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ClickableElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'ClickableElementEvents',
    },
  ],
  defaultExample: {
    image: 'clickable-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-clickable.example.html',
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
          'Wrap content in a styled clickable area that navigates like a link. This example displays a card-like wrapper with `padding`, `border`, and `borderRadius` around text that links to an external page.',
        codeblock: {
          title: 'Create a clickable card with custom styling',
          tabs: [
            {
              code: './examples/clickable-link.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [],
};

export default data;

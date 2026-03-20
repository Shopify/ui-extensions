import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PressButton';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'press-button-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PressButtonElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'PressButtonElementEvents',
    },
  ],
  defaultExample: {
    image: 'press-button-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-press-button.example.html',
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
          'Pre-select a toggle button by setting `defaultPressed` so it renders in its active state on first load. The buyer can still toggle it off.',
        codeblock: {
          title: 'Pre-select a press button',
          tabs: [
            {
              code: './examples/press-button-default-pressed.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;

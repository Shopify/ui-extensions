import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Popover';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'popover-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PopoverElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'PopoverElementEvents',
    },
  ],
  defaultExample: {
    image: 'popover-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-popover.example.html',
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
          'Constrain the popover height so long content scrolls within a fixed area. This example displays a size chart with `maxBlockSize` set to limit the overlay height.',
        codeblock: {
          title: 'Constrain popover height with a size limit',
          tabs: [
            {
              code: './examples/popover-constrained.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;

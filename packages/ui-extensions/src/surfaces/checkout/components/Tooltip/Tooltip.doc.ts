import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Tooltip';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'tooltip-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TooltipElementProps',
    },
  ],
  defaultExample: {
    image: 'tooltip-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-tooltip.example.html',
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
          'Add tooltips to checkout details using info icons. This example displays two tooltips providing delivery and duty information, each paired with an `s-clickable` using `interestFor`.',
        codeblock: {
          title: 'Show a tooltip on inline text',
          tabs: [
            {
              code: './examples/tooltip-on-text.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;

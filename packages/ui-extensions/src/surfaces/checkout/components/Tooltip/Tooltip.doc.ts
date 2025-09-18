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
};

export default data;

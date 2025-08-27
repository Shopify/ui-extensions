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
      description: '',
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
};

export default data;

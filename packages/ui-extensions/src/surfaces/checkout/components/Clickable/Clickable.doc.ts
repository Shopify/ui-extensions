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
      description: '',
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
  subSections: [],
};

export default data;

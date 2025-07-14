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
  ],
  defaultExample: {
    image: 'clipboard-basic.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-clipboarditem.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;

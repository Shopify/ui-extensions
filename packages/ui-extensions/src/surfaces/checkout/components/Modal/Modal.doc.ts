import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Modal';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'modal-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ModalProps',
    },
  ],
  defaultExample: {
    image: 'modal-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-modal.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;

import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Switch';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'switch-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SwitchElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'SwitchElementEvents',
    },
  ],
  defaultExample: {
    image: 'switch-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-switch.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;

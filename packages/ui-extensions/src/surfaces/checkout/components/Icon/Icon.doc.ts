import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Icon';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'icon-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'IconProps',
    },
  ],
  defaultExample: {
    image: 'icon-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-code.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;

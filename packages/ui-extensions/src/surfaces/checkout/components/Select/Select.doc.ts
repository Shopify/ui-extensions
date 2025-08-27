import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Select';
import optionSharedContent from '../../../../docs/shared/components/Option';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'select-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SelectElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'SelectElementEvents',
    },
    {
      title: optionSharedContent.name,
      description: optionSharedContent.description,
      type: 'OptionProps',
    },
  ],
  defaultExample: {
    image: 'select-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-select.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;

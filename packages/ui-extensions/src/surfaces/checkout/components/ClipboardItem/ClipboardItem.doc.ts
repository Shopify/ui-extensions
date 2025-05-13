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
      type: 'ClipboardItemProps',
    },
  ],
  category: 'Components',
  subCategory: 'utilities',
  defaultExample: {
    image: 'clipboard-basic.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-clipboarditem.example.html',
          language: 'html',
        },
      ],
    },
  },
  related: [
    {
      name: 'Button',
      subtitle: 'Component',
      url: 'button',
      type: 'Component',
    },
    {
      name: 'Link',
      subtitle: 'Component',
      url: 'link',
      type: 'Component',
    },
  ],
};

export default data;

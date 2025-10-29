import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/TextArea';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'text-area-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextAreaElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'TextAreaElementEvents',
    },
  ],
  defaultExample: {
    image: 'text-area-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-text-area.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;

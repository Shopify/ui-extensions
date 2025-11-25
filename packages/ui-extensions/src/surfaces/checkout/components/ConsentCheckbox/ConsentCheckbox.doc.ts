import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ConsentCheckbox';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'consent-checkbox-thumbnail.png',
  requires:
    'enabling of the `sms_marketing` capability of the Customer Privacy capability group to work.',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ConsentCheckboxElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'ConsentCheckboxElementEvents',
    },
  ],
  defaultExample: {
    image: 'consent-checkbox-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-consent-checkbox.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;

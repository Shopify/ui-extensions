import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from '../../../../docs/shared/components/Form';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Polaris web components',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/form.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'FormEvents',
    },
  ],
  defaultExample: {
    codeblock: {
      title: '',
      tabs: [
        {
          code: '../../../../../docs/surfaces/admin/staticPages/examples/form-default-value.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
};

export default data;

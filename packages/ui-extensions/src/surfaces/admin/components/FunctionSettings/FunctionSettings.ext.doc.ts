import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from '../../../../docs/shared/components/FunctionSettings';

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
          title: 'JSX',
          code: './examples/default.tsx',
          language: 'jsx',
        },
      ],
    },
  },
};

export default data;

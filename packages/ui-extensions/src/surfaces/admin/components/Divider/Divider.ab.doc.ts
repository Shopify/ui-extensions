import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from './shared';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  defaultExample: {
    image: 'divider-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.html',
          language: 'jsx',
        },
        {
          title: 'HTML',
          code: './examples/default.html',
          language: 'html',
        },
        {
          title: 'HTML',
          code: './examples/default.html',
          language: 'preview-admin-in-section',
        },
      ],
    },
  },
};

export default data;

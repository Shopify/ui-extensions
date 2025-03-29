import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from './shared';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  defaultExample: {
    image: 'box-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.jsx',
          language: 'jsx',
        },
        {
          title: 'HTML',
          code: './examples/default.html',
          language: 'html',
        },
        {
          title: 'HTML',
          code: './examples/default.html', // This gets updated in build-ab-docs.sh
          language: 'preview', // Do not edit. This is required for Live Previews
        },
      ],
    },
  },
};

export default data;

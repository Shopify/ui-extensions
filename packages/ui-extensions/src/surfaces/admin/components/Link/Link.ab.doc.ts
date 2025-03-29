import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from './shared';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Experimental Components',
  defaultExample: {
    image: 'link-default.png',
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
          code: './examples/default.html', // This gets updated in build-ab-docs.sh
          language: 'preview', // Do not edit. This is required for Live Previews
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description: 'Link to an app page',
        image: 'link-default.png',
        codeblock: {
          tabs: [
            {
              title: 'JSX',
              code: './examples/app.html',
              language: 'jsx',
            },
          ],
          title: 'App Link',
        },
      },
      {
        description: 'Link to a Shopify admin page',
        image: 'shopify-section-link.png',
        codeblock: {
          tabs: [
            {
              title: 'JSX',
              code: './examples/shopify-section.html',
              language: 'jsx',
            },
          ],
          title: 'Shopify Section Link',
        },
      },
    ],
  },
};

export default data;

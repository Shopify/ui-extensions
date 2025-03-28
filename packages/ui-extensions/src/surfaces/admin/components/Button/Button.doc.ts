import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from './shared';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  defaultExample: {
    image: 'button-default.png',
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
          code: './examples/default.html', // This gets updated in build-ab-docs.sh
          language: 'preview', // Do not edit. This is required for Live Previews
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          layout: 'inline',
        },
      ],
    },
  },
};

export default data;

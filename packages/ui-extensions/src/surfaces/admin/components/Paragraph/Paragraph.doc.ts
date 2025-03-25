import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Paragraph',
  description:
    'Use this to display a block of text similar to the `<p>` tag in HTML.',
  requires: '',
  thumbnail: 'paragraph-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Paragraph',
      description: '',
      type: 'Paragraph',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'paragraph-default.png',
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
        },
      ],
    },
  },

  related: [
    {
      type: 'component',
      name: 'Heading',
      url: '/docs/api/admin-extensions/components/titles-and-text/heading',
    },
  ],
};

export default data;

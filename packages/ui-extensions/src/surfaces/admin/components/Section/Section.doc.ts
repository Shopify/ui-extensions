import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Section',
  description:
    '`Section` is a structural component that allows thematic grouping of content. Its visual style is contextual and controlled by Shopify, so a `Section` may look different depending on the component it is nested inside.\n\n`Section` also automatically increases the heading level for its content to ensure a semantically correct heading structure in the document. To further increase the heading level inside the `Section`, consider nesting new `Section`s.',
  requires: '',
  thumbnail: 'section-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Section',
      description: '',
      type: 'Section',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'section-default.png',
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
  related: [],
};

export default data;

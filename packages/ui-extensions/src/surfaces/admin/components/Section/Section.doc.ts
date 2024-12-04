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
      title: 'Section to an app page',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-section.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Section/examples/basic-section.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },
  related: [],
};

export default data;

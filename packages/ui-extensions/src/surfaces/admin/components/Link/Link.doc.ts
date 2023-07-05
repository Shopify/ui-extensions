import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Link',
  description: 'Link is used to ...',
  requires: '',
  thumbnail: 'link-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'LinkProps',
      description: '',
      type: 'LinkProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'link-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Link/examples/basic-Link.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Link.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description: 'TODO: add description',
        image: 'app-link.png',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: './packages/ui-extensions/src/surfaces/admin/components/Link/examples/app-link.example.ts',
              language: 'typescript',
            },
          ],
          title: 'TODO: add example title',
        },
      },
      {
        description: 'TODO: add description',
        image: 'external-link.png',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: './packages/ui-extensions/src/surfaces/admin/components/Link/examples/external-link.example.ts',
              language: 'typescript',
            },
          ],
          title: 'TODO: add example title',
        },
      },
      {
        description: 'TODO: add description',
        image: 'relative-link.png',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: './packages/ui-extensions/src/surfaces/admin/components/Link/examples/relative-link.example.ts',
              language: 'typescript',
            },
          ],
          title: 'TODO: add example title',
        },
      },
      {
        description: 'TODO: add description',
        image: 'shopify-section-link.png',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: './packages/ui-extensions/src/surfaces/admin/components/Link/examples/shopify-section-link.example.ts',
              language: 'typescript',
            },
          ],
          title: 'TODO: add example title',
        },
      },
    ],
  },
  related: [],
};

export default data;

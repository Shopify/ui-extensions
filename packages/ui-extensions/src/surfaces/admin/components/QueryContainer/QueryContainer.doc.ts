import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/QueryContainer';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/querycontainer.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description:
        'Use to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.',
      type: 'QueryContainer',
    },
    {
      title: 'Slots',
      description: '',
      type: 'QueryContainerSlots',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
    codeblock: {
      title: '',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'none',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'none',
        },
      ],
    },
  },
  related: [],
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates the simplest way to use QueryContainer, wrapping content with a named container context.',
            codeblock: {
              title: 'Basic Usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },
                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;

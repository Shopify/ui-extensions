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
              'Demonstrates the simplest way to use QueryContainer, wrapping content that will adapt based on container size.',
            codeblock: {
              title: 'Basic Usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows how to create a responsive product card layout that changes from vertical to horizontal based on container width using container queries.',
            codeblock: {
              title: 'Responsive Product card',
              tabs: [
                {
                  code: './examples/responsive-product-card.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              "Illustrates a dynamic order details layout that switches between grid and column layouts depending on the container's width.",
            codeblock: {
              title: 'Admin order details layout',
              tabs: [
                {
                  code: './examples/admin-order-details-layout.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how the same component can have different layouts in narrow and wide containers, showing the power of container queries.',
            codeblock: {
              title: 'Side-by-side container size comparison',
              tabs: [
                {
                  code: './examples/side-by-side-container-size-comparison.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows how to use Polaris design tokens and theme variables to create a responsive card layout that adapts its padding and grid structure based on container width.',
            codeblock: {
              title: 'With design tokens and theme variables',
              tabs: [
                {
                  code: './examples/with-design-tokens-and-theme-variables.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              "Demonstrates a flexible layout that changes the number of columns dynamically based on the container's width, from 2 to 3 columns as space increases.",
            codeblock: {
              title: 'Using QueryContainer with responsive layout',
              tabs: [
                {
                  code: './examples/using-querycontainer-with-responsive-layout.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates how to use container queries to adjust text size dynamically using Polaris design tokens as the container width changes.',
            codeblock: {
              title: 'With responsive typography using design tokens',
              tabs: [
                {
                  code: './examples/with-responsive-typography-using-design-tokens.html',
                  language: 'preview',
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

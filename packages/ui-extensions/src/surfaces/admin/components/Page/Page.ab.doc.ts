import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Page';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/page.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: 'Use as the outer wrapper of a page',
      type: 'Page',
    },
    {
      title: 'Slots',
      description: '',
      type: 'PageSlots',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
    codeblock: {
      title: '',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
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
              'Demonstrates a simple page with a heading and basic content, using the default base inline size.',
            codeblock: {
              title: 'Basic page layout (default base inline-size)',
              tabs: [
                {
                  code: './examples/basic-page-layout-default-base-inline-size.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows a page with a clear heading and descriptive text, illustrating how to use the page component with a title.',
            codeblock: {
              title: 'Page with heading',
              tabs: [
                {
                  code: './examples/page-with-heading.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a page with a small inline size, ideal for focused, compact content like settings or forms with minimal information.',
            codeblock: {
              title: 'Small inline size for focused content',
              tabs: [
                {
                  code: './examples/small-inline-size-for-focused-content.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a page with a large inline size, perfect for displaying broader content like analytics or dashboards with multiple information sections.',
            codeblock: {
              title: 'Large inline size for wide content',
              tabs: [
                {
                  code: './examples/large-inline-size-for-wide-content.html',
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

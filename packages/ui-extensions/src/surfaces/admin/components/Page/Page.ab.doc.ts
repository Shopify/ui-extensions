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
              'Shows a page with a clear heading and descriptive text, illustrating how to use the page component with a title.',
            codeblock: {
              title: 'Page with heading',
              tabs: [
                {
                  code: './examples/page-with-heading.html',
                  language: 'html',
                  layout: 'none',
                },
                {
                  code: './examples/page-with-heading.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
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
                  language: 'html',
                  layout: 'none',
                },
                {
                  code: './examples/small-inline-size-for-focused-content.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
                  customStyles: {
                    minHeight: '400px',
                  },
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
                  language: 'html',
                  layout: 'none',
                },
                {
                  code: './examples/large-inline-size-for-wide-content.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
                  customStyles: {
                    minHeight: '400px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Shows a page with breadcrumb navigation and a descriptive heading, helping users understand their location in the navigation hierarchy.',
            codeblock: {
              title: 'Page with breadcrumbs and title',
              tabs: [
                {
                  code: './examples/page-with-breadcrumbs-and-title.html',
                  language: 'html',
                  layout: 'none',
                },
                {
                  code: './examples/page-with-breadcrumbs-and-title.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a page with a primary action button and secondary action buttons, showing how to provide main and related actions alongside the page heading.',
            codeblock: {
              title: 'Page with primary and secondary actions',
              tabs: [
                {
                  code: './examples/page-with-secondary-actions.html',
                  language: 'html',
                  layout: 'none',
                },
                {
                  code: './examples/page-with-secondary-actions.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
                  customStyles: {
                    minHeight: '400px',
                  },
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

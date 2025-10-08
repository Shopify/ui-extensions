import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Paragraph';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/paragraph.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Displaying text content in a paragraph format.
- Grouping elements with the same style. For instance, icons inside a paragraph will automatically adopt the paragraph's tone.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use short paragraphs to make your content scannable.
- Use plain and clear terms.
- Don't use jargon or technical language.
- Don't use different terms to describe the same thing.
- Don't duplicate content.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Paragraph',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ParagraphSlots',
    },
  ],
  defaultExample: {
    image: 'paragraph-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates a simple paragraph with default styling, showing how to use the paragraph component for standard text content.',
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
          {
            description:
              'Illustrates how to apply different tones and color variations to convey different types of information, such as informational and success messages.',
            codeblock: {
              title: 'With Tone and Color',
              tabs: [
                {
                  code: './examples/with-tone-and-color.html',
                  language: 'html',
                },

                {
                  code: './examples/with-tone-and-color.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to limit the number of lines displayed using the lineClamp prop, which truncates long text with an ellipsis after the specified number of lines.',
            codeblock: {
              title: 'Line Clamping',
              tabs: [
                {
                  code: './examples/line-clamping.html',
                  language: 'html',
                },

                {
                  code: './examples/line-clamping.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the use of tabular numbers with fontVariantNumeric, ensuring consistent alignment and readability for numerical data.',
            codeblock: {
              title: 'Tabular Numbers',
              tabs: [
                {
                  code: './examples/tabular-numbers.html',
                  language: 'html',
                },

                {
                  code: './examples/tabular-numbers.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates right-to-left (RTL) text rendering, showing how the paragraph component supports internationalization and different text directions.',
            codeblock: {
              title: 'RTL Support',
              tabs: [
                {
                  code: './examples/rtl-support.html',
                  language: 'html',
                },

                {
                  code: './examples/rtl-support.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to use the accessibilityVisibility prop to create text that is exclusively available to screen readers, improving accessibility for assistive technologies.',
            codeblock: {
              title: 'Screen Reader Text',
              tabs: [
                {
                  code: './examples/screen-reader-text.html',
                  language: 'html',
                },

                {
                  code: './examples/screen-reader-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases various tone and color combinations for different administrative messages, illustrating how paragraph can communicate different types of information in a user interface.',
            codeblock: {
              title: 'Admin UI Patterns',
              tabs: [
                {
                  code: './examples/admin-ui-patterns.html',
                  language: 'html',
                },

                {
                  code: './examples/admin-ui-patterns.jsx',
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

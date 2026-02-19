import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Paragraph';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/paragraph.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Write in short, scannable blocks:** Keep paragraphs to 2-4 sentences to improve readability. Merchants scan more than they read, so break long content into digestible chunks. Use plain language and avoid jargon.
- **Apply tones to communicate intent:** Use semantic tones like critical for errors, caution for warnings, and success for confirmations. Tones help merchants quickly understand the nature of information, but don't rely on color alone—pair with clear language.
- **Consider accessibility in all contexts:** Use screen-reader-only text to provide context that sighted merchants get from layout or icons. Make sure tone colors have sufficient contrast for readability.
- **Use line clamping strategically:** Line clamping helps manage space in constrained layouts like cards or previews, but truncated content should never hide critical information.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Paragraphs render as block-level elements with spacing above and below. This spacing is designed for body content and might create unwanted gaps in tightly packed layouts.
- Line clamping truncates text visually but doesn't provide tooltips or expandable content. Truncated information isn't fully accessible unless you provide an alternative way to view the complete text.
- Tone colors are optimized for light backgrounds. Using toned paragraphs on dark or colored backgrounds might result in insufficient contrast for accessibility.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the paragraph component.',
      type: 'Paragraph',
    },
    {
      title: 'Slots',
      description:
        'The paragraph component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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

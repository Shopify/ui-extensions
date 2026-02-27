import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Text';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/text.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Apply semantic types to improve meaning:** Use \`strong\` for key words or phrases that need emphasis, \`address\` for contact information like physical or email addresses, and \`redundant\` for screen reader context when content is visually duplicated. Semantic types help screen readers convey the correct meaning to merchants.
- **Emphasize sparingly and strategically:** Use strong to emphasize key words or numbers within sentences, not entire sentences. Too much emphasis dilutes its effectiveness and makes content harder to scan.
- **Choose appropriate tones for status:** Apply tones like critical, success, or caution to communicate status inline. Tones draw attention to important information but work best when paired with clear language, not used alone.
- **Consider contrast for subdued text:** Subdued text works well for timestamps and metadata, but avoid using it for critical information that merchants must read.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Text renders inline by default and flows with surrounding content. For block-level text with spacing, use the [paragraph](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/typography-and-content/paragraph) component or wrap in layout components.
- The component doesn't include text truncation or ellipsis. Long text will wrap or overflow depending on the container. Use other components like [heading](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/typography-and-content/heading) with line clamping if truncation is needed.
- Tone colors are optimized for light backgrounds. Using tones on dark or colored backgrounds might not meet accessibility contrast requirements.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the text component.',
      type: 'Text',
    },
    {
      title: 'Slots',
      description:
        'The text component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TextSlots',
    },
  ],
  defaultExample: {
    image: 'text-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'wrapped',
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
              'Standard text content for general interface messaging and descriptions.',
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
              'Emphasized text for important messages and call-to-actions.',
            codeblock: {
              title: 'Strong Text',
              tabs: [
                {
                  code: './examples/strong-text.html',
                  language: 'html',
                },

                {
                  code: './examples/strong-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Structured address text with proper semantic meaning for screen readers.',
            codeblock: {
              title: 'Semantic Address',
              tabs: [
                {
                  code: './examples/semantic-address.html',
                  language: 'html',
                },

                {
                  code: './examples/semantic-address.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Monospace number formatting for consistent alignment in tables and financial data.',
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
              'Color-coded text indicating different status states and semantic meanings.',
            codeblock: {
              title: 'Status Tones',
              tabs: [
                {
                  code: './examples/status-tones.html',
                  language: 'html',
                },

                {
                  code: './examples/status-tones.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Text visible only to screen readers for providing additional context.',
            codeblock: {
              title: 'Accessibility Hidden Text',
              tabs: [
                {
                  code: './examples/accessibility-hidden-text.html',
                  language: 'html',
                },

                {
                  code: './examples/accessibility-hidden-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Text direction support for RTL languages like Arabic and Hebrew.',
            codeblock: {
              title: 'Right-to-Left Text',
              tabs: [
                {
                  code: './examples/right-to-left-text.html',
                  language: 'html',
                },

                {
                  code: './examples/right-to-left-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Lower contrast text for secondary information and timestamps.',
            codeblock: {
              title: 'Subdued Color',
              tabs: [
                {
                  code: './examples/subdued-color.html',
                  language: 'html',
                },

                {
                  code: './examples/subdued-color.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Text element associated with tooltips using the `interestFor` attribute to show additional information on hover or focus.',
            codeblock: {
              title: 'Interest For Association',
              tabs: [
                {
                  code: './examples/interest-for-association.html',
                  language: 'html',
                  customStyles: {
                    minHeight: '200px',
                  },
                },

                {
                  code: './examples/interest-for-association.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '200px',
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

import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Text';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/text.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Adding inline text elements such as labels or line errors.
- Applying different visual tones and text styles to specific words or phrases within a \`s-paragraph\`, such as a \`strong\` type or \`critical\` tone.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use plain and clear terms.
- Don't use jargon or technical language.
- Don't use different terms to describe the same thing.
- Don't duplicate content.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Text',
    },
    {
      title: 'Slots',
      description: '',
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

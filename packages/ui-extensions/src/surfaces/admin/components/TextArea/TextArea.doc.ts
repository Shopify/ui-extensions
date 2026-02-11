import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/TextArea';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/textarea.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Set appropriate initial height:** The visible row count sets merchants' expectations for how much content to provide. A small textarea suggests brief input, while a larger one indicates more detailed content is expected.
- **Set realistic length constraints:** Define maximum and minimum character limits that reflect actual requirements. Communicate these limits clearly so merchants understand how much content they need to provide.
- **Provide helpful placeholder examples:** Show merchants what kind of content and level of detail you expect. Good placeholder text demonstrates format and tone rather than just stating the field's purpose.
- **Give real-time feedback on length limits:** When enforcing maximum length, show merchants how many characters they have remaining. This helps them craft their content within constraints without exceeding limits.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The \`maxLength\` attribute prevents typing but doesn't reliably prevent pasting longer content. Browsers handle this differently. Always validate length server-side.
- The component only accepts plain text. If you need bold, italics, lists, or other formatting, you must implement a rich text editor or use plain text with Markdown syntax.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TextArea` component.',
      type: 'TextArea',
    },
    {
      title: 'Events',
      description:
        'The `TextArea` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TextAreaEvents',
    },
  ],
  defaultExample: {
    image: 'textarea-default.png',
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
              'Demonstrates a simple text area for collecting product descriptions with a placeholder and autocomplete disabled.',
            codeblock: {
              title: 'Basic usage',
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
              'Showcases a text area for writing SEO meta descriptions with a character limit of 160, providing guidance text and a multi-line input.',
            codeblock: {
              title: 'Seo meta description with character limit',
              tabs: [
                {
                  code: './examples/seo-meta-description-with-character-limit.html',
                  language: 'html',
                },

                {
                  code: './examples/seo-meta-description-with-character-limit.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the error state of a text area with a minimum length requirement, showing how validation errors are displayed in a commerce context.',
            codeblock: {
              title: 'With error state',
              tabs: [
                {
                  code: './examples/error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a text area for entering detailed product care instructions, with an expanded height and supporting guidance text.',
            codeblock: {
              title: 'Product care instructions',
              tabs: [
                {
                  code: './examples/product-care-instructions.html',
                  language: 'html',
                },

                {
                  code: './examples/product-care-instructions.jsx',
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

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
        'Configure the following properties on the text area component.',
      type: 'TextArea',
    },
    {
      title: 'Events',
      description:
        'The text area component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'TextAreaEvents',
    },
  ],
  defaultExample: {
    image: 'textarea-default.png',
    description:
      'Add a multi-line text input for collecting longer content from merchants. This example shows a text area with a pre-filled shipping address and a set number of visible rows.',
    codeblock: {
      title: 'Add a basic text area',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Collect longer text like product descriptions with a placeholder to guide input. This example shows an empty text area with placeholder text and autocomplete disabled.',
            codeblock: {
              title: 'Collect text with a placeholder',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set a maximum character length to keep input concise, such as for SEO meta descriptions. This example shows a text area with a 160-character limit and help text explaining the constraint.',
            codeblock: {
              title: 'Limit input length with a character cap',
              tabs: [
                {
                  code: './examples/seo-meta-description-with-character-limit.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Display an error message when the entered text does not meet validation requirements. This example shows a text area with a minimum length constraint and an error explaining what is needed.',
            codeblock: {
              title: 'Show a validation error',
              tabs: [
                {
                  code: './examples/error-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Prevent editing by making a text area read-only or fully disabled. This example shows a read-only field for viewing order notes and a disabled field for internal comments.',
            codeblock: {
              title: 'Disable or make a text area read-only',
              tabs: [
                {
                  code: './examples/disabled-and-read-only.html',
                  language: 'preview',
                  title: '',
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

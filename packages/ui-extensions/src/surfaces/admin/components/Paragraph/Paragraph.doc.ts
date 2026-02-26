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
    description:
      'Create a paragraph with default styling for body text content. This example shows the basic paragraph component rendering a block of text.',
    codeblock: {
      title: 'Add a basic paragraph',
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
              'Apply semantic tones to convey different types of information through color. This example shows all five tones—info, success, caution, warning, and critical—for common merchant-facing messages.',
            codeblock: {
              title: 'Communicate status with tones',
              tabs: [
                {
                  code: './examples/with-tone-and-color.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Limit the number of visible lines in a paragraph using the `lineClamp` property. This example shows a product description truncated to a single line with an ellipsis in a constrained container.',
            codeblock: {
              title: 'Truncate long text with line clamping',
              tabs: [
                {
                  code: './examples/line-clamping.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use `fontVariantNumeric` set to tabular-nums to render numbers with consistent widths for even alignment. This example shows tabular number formatting for financial data.',
            codeblock: {
              title: 'Align numbers with tabular formatting',
              tabs: [
                {
                  code: './examples/tabular-numbers.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use `accessibilityVisibility` set to exclusive to create text that is only available to screen readers. This example shows a paragraph providing sort context that assistive technologies can announce.',
            codeblock: {
              title: 'Add screen-reader-only text',
              tabs: [
                {
                  code: './examples/screen-reader-text.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use `color` set to subdued for secondary information like helper text, disclaimers, and supplementary descriptions. This example shows a subdued paragraph providing guidance below a form action.',
            codeblock: {
              title: 'De-emphasize secondary text with subdued color',
              tabs: [
                {
                  code: './examples/subdued-color.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set the `dir` property to rtl for right-to-left languages like Arabic and Hebrew. This example shows a paragraph rendered in Arabic with right-to-left text direction.',
            codeblock: {
              title: 'Render right-to-left text',
              tabs: [
                {
                  code: './examples/rtl-support.html',
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

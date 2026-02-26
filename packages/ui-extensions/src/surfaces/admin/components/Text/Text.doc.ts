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
    description:
      'Create inline text elements with semantic types to add structure and meaning. This example shows strong text for a label paired with regular text for the value.',
    codeblock: {
      title: 'Add inline text with emphasis',
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
              'Apply semantic tones to signal different statuses inline. This example shows `success`, `critical`, and `warning` tones for common order and inventory states.',
            codeblock: {
              title: 'Communicate status with tones',
              tabs: [
                {
                  code: './examples/status-tones.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set the `type` property to `address` to render contact information with proper semantic meaning. This example shows a formatted address that screen readers identify as address content.',
            codeblock: {
              title: 'Display a semantic address',
              tabs: [
                {
                  code: './examples/semantic-address.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set the `color` property to `subdued` for secondary metadata like timestamps and supplementary details. This example shows a subdued text element for a last-updated indicator.',
            codeblock: {
              title: 'De-emphasize secondary information',
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
              'Set the `fontVariantNumeric` property to `tabular-nums` to render numbers with consistent widths for even alignment in data displays. This example shows tabular number formatting for a price.',
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
              'Use the `accessibilityVisibility` property to provide additional context for screen readers without affecting the visual layout. This example shows hidden text that communicates pricing context to assistive technologies.',
            codeblock: {
              title: 'Add screen-reader-only text',
              tabs: [
                {
                  code: './examples/accessibility-hidden-text.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use the `interestFor` property to connect text to a tooltip, displaying additional context on hover or focus. This example shows explanatory text that triggers a tooltip with SKU details.',
            codeblock: {
              title: 'Associate text with a tooltip',
              tabs: [
                {
                  code: './examples/interest-for-association.html',
                  language: 'preview',
                  title: '',
                  customStyles: {
                    minHeight: '200px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Set the `dir` property to `rtl` for right-to-left languages like Arabic and Hebrew. This example shows text rendered in Arabic with right-to-left direction.',
            codeblock: {
              title: 'Render right-to-left text',
              tabs: [
                {
                  code: './examples/right-to-left-text.html',
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

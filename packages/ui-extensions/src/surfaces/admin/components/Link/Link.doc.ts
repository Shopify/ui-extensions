import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Link';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/link.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Open external links in new tabs:** Use \`target="_blank"\` only for external URLs (like help documentation or partner sites). Keep internal admin links in the same tab to maintain workflow context.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Links within extensions have limited control over navigation behavior in the Shopify admin. Some admin navigation patterns might override link behavior for consistency.
- Links with \`target="_blank"\` automatically get \`rel="noopener noreferrer"\` for security, but external URLs are still subject to browser security policies. Some browsers might block external navigation from extensions or show security warnings.
- Links don't have a built-in loading or disabled state. If clicking a link triggers a slow navigation or async operation, you must implement loading feedback yourself.
- The \`download\` attribute for forcing file downloads has inconsistent browser support. It works reliably for same-origin files but might be ignored for cross-origin resources. Safari on iOS doesn't support the download attribute at all.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the link component.',
      type: 'Link',
    },
    {
      title: 'Events',
      description:
        'The link component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'LinkEvents',
    },
    {
      title: 'Slots',
      description:
        'The link component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'LinkSlots',
    },
  ],
  defaultExample: {
    image: 'link-default.png',
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
              'Links automatically inherit the tone from their surrounding paragraph context.',
            codeblock: {
              title: 'Basic Links in Paragraph',
              tabs: [
                {
                  code: './examples/basic-links-in-paragraph.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-links-in-paragraph.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates links within subdued paragraph, showing how links can be used in less prominent paragraph contexts for additional guidance or support.',
            codeblock: {
              title: 'Links in Subdued Paragraph',
              tabs: [
                {
                  code: './examples/links-in-subdued-paragraph.html',
                  language: 'html',
                },

                {
                  code: './examples/links-in-subdued-paragraph.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates how links can be used in critical or urgent text contexts, drawing attention to important actions that require immediate user intervention.',
            codeblock: {
              title: 'Critical Context Links',
              tabs: [
                {
                  code: './examples/critical-context-links.html',
                  language: 'html',
                },

                {
                  code: './examples/critical-context-links.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how links automatically adapt their tone to the surrounding text context, maintaining visual consistency while providing navigation.',
            codeblock: {
              title: 'Links with Auto Tone',
              tabs: [
                {
                  code: './examples/links-with-auto-tone.html',
                  language: 'html',
                },

                {
                  code: './examples/links-with-auto-tone.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how links can be integrated within banner components to highlight important information and provide direct action paths.',
            codeblock: {
              title: 'Links in Banner',
              tabs: [
                {
                  code: './examples/links-in-banner.html',
                  language: 'html',
                },

                {
                  code: './examples/links-in-banner.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates using links within a box container to provide contextual navigation and additional information in a visually contained area.',
            codeblock: {
              title: 'Links in Box Container',
              tabs: [
                {
                  code: './examples/links-in-box-container.html',
                  language: 'html',
                },

                {
                  code: './examples/links-in-box-container.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how links can be used within warning banners to provide immediate actions related to critical notifications.',
            codeblock: {
              title: 'Links in Banner Context',
              tabs: [
                {
                  code: './examples/links-in-banner-context.html',
                  language: 'html',
                },

                {
                  code: './examples/links-in-banner-context.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how to create links that trigger file downloads, useful for exporting data or providing downloadable resources.',
            codeblock: {
              title: 'Download Links',
              tabs: [
                {
                  code: './examples/download-links.html',
                  language: 'html',
                },

                {
                  code: './examples/download-links.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates linking to external resources with different targets, showing how to open links in new tabs and provide navigation to external documentation.',
            codeblock: {
              title: 'External Links',
              tabs: [
                {
                  code: './examples/external-links.html',
                  language: 'html',
                },

                {
                  code: './examples/external-links.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to use the `lang` attribute to specify the language of a link, supporting internationalization and proper screen reader pronunciation.',
            codeblock: {
              title: 'Links with Language Attribute',
              tabs: [
                {
                  code: './examples/links-with-language-attribute.html',
                  language: 'html',
                },

                {
                  code: './examples/links-with-language-attribute.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how links can have different visual tones, including default, neutral, and critical, allowing for varied contextual styling.',
            codeblock: {
              title: 'Links with Different Tones',
              tabs: [
                {
                  code: './examples/links-with-different-tones.html',
                  language: 'html',
                },

                {
                  code: './examples/links-with-different-tones.jsx',
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

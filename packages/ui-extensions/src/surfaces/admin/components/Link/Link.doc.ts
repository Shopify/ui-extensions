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
    description:
      'Add an inline link to let merchants navigate to another page. This example shows a basic text link with an `href` property.',
    codeblock: {
      title: 'Add a basic link',
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
              'Embed links within paragraph text so merchants can navigate to related content inline. This example shows two links inside a paragraph that inherit the surrounding text tone.',
            codeblock: {
              title: 'Embed links in paragraph text',
              tabs: [
                {
                  code: './examples/basic-links-in-paragraph.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Place links inside banners to provide direct actions alongside important notifications. This example shows a link inside an info banner prompting merchants to create a campaign.',
            codeblock: {
              title: 'Add links inside a banner',
              tabs: [
                {
                  code: './examples/links-in-banner.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Place links inside a box container to provide navigation within a visually distinct content area. This example shows two links inside a bordered box with background and padding.',
            codeblock: {
              title: 'Add links inside a box container',
              tabs: [
                {
                  code: './examples/links-in-box-container.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use the `download` property to trigger a file download when the link is clicked. This example shows a link that downloads a CSV file for customer data export.',
            codeblock: {
              title: 'Trigger a file download',
              tabs: [
                {
                  code: './examples/download-links.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Open external URLs in a new tab so merchants stay on the current page. This example shows two links with `target="_blank"` pointing to external documentation.',
            codeblock: {
              title: 'Open external links in a new tab',
              tabs: [
                {
                  code: './examples/external-links.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set the `lang` property so screen readers pronounce the link text correctly. This example shows a French-language link with the `lang` attribute set.',
            codeblock: {
              title: 'Set the language for a link',
              tabs: [
                {
                  code: './examples/links-with-language-attribute.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Configure links to inherit the tone of their parent paragraph to match the surrounding context. This example shows links inside paragraphs with six different tones.',
            codeblock: {
              title: 'Match link tone to surrounding context',
              tabs: [
                {
                  code: './examples/links-with-different-tones.html',
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

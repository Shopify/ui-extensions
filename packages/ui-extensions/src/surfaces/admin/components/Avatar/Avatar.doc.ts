import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Avatar';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/avatar.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Choose appropriate sizes:** Use smaller sizes for compact contexts like tables and lists, and larger sizes for profile pages where the person is the primary focus.
- **Provide meaningful alt text:** Describe the avatar content like **Sarah Chen** or **Acme Corporation**, or use empty alt text if the name appears next to the avatar as text.
- **Position near related content:** Place avatars adjacent to the names or entities they represent for clear associations in lists, tables, or cards.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Avatar images must be served from URLs accessible by the merchant's browser. If the image is hosted on a different domain, the server must include appropriate \`Access-Control-Allow-Origin\` headers or the image might fail to load.
- Only standard web image formats (JPEG, PNG, GIF, WebP, SVG) are supported. Unsupported formats will fall back to initials.
- The \`initials\` prop accepts a string that displays when no image is available. Characters beyond the first two might be truncated. Special characters, emojis, or non-Latin scripts might not render as expected.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the avatar component.',
      type: 'Avatar',
    },
    {
      title: 'Events',
      description:
        'The avatar component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'AvatarEvents',
    },
  ],
  defaultExample: {
    description:
      'Display an avatar with initials when no profile image is available. Click to interact with the preview.',
    codeblock: {
      title: 'Display initials',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
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
        title: '',
        examples: [
          {
            description:
              'Show a generic person icon when no user information is available. Click to interact with the preview.',
            codeblock: {
              title: 'Show a placeholder avatar',
              tabs: [
                {
                  code: './examples/default-avatar-no-props.html',
                  language: 'html',
                },

                {
                  code: './examples/default-avatar-no-props.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Load a profile image with automatic fallback to initials if it fails. Click to interact with the preview.',
            codeblock: {
              title: 'Load an image with fallback',
              tabs: [
                {
                  code: './examples/with-image-source-and-fallback.html',
                  language: 'html',
                },

                {
                  code: './examples/with-image-source-and-fallback.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Display avatars in different sizes for various interface contexts. Click to interact with the preview.',
            codeblock: {
              title: 'Adjust the size',
              tabs: [
                {
                  code: './examples/size-variations.html',
                  language: 'html',
                },

                {
                  code: './examples/size-variations.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Handle long business names by truncating initials appropriately. Click to interact with the preview.',
            codeblock: {
              title: 'Handle long names',
              tabs: [
                {
                  code: './examples/long-initials-handling.html',
                  language: 'html',
                },

                {
                  code: './examples/long-initials-handling.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Identical initials always receive the same color for visual consistency. Click to interact with the preview.',
            codeblock: {
              title: 'Maintain color consistency',
              tabs: [
                {
                  code: './examples/color-consistency-demo.html',
                  language: 'html',
                },

                {
                  code: './examples/color-consistency-demo.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Automatically fall back to initials when profile images fail to load. Click to interact with the preview.',
            codeblock: {
              title: 'Handle image errors',
              tabs: [
                {
                  code: './examples/error-handling-example.html',
                  language: 'html',
                },

                {
                  code: './examples/error-handling-example.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Display customer avatars in a list layout. Click to interact with the preview.',
            codeblock: {
              title: 'Display in a customer list',
              tabs: [
                {
                  code: './examples/in-customer-list-context.html',
                  language: 'html',
                },

                {
                  code: './examples/in-customer-list-context.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Show staff member avatars in admin interface contexts. Click to interact with the preview.',
            codeblock: {
              title: 'Display staff members',
              tabs: [
                {
                  code: './examples/staff-member-profiles.html',
                  language: 'html',
                },

                {
                  code: './examples/staff-member-profiles.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Integrate avatars with Section components for merchant layouts. Click to interact with the preview.',
            codeblock: {
              title: 'Combine with Section',
              tabs: [
                {
                  code: './examples/with-section-component.html',
                  language: 'html',
                },

                {
                  code: './examples/with-section-component.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Display avatars for fulfillment partners in the Shopify ecosystem. Click to interact with the preview.',
            codeblock: {
              title: 'Display fulfillment partners',
              tabs: [
                {
                  code: './examples/fulfillment-partner-avatars.html',
                  language: 'html',
                },

                {
                  code: './examples/fulfillment-partner-avatars.jsx',
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

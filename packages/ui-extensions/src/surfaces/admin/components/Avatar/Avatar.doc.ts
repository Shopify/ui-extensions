import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Avatar';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/avatar.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Identifying individuals or businesses
- Representing merchants, customers, or other entities visually
- Seeing visual indicators of people or businesses in lists, tables, or cards`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- \`small-200\`: use in tightly condensed layouts
- \`small\`: use when the base size is too big for the layout, or when the avatar has less importance
- \`base\`: use as the default size
- \`large\`: use when an avatar is a focal point, such as on a single customer card
- \`large-200\`: use when extra emphasis is required`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `For avatars, we recommend using a format that describes what will show in the image:
- alt="Person's name" if avatar represents a person
- alt="Business's name" if avatar represents a business
- alt="" if the name appears next to the avatar as text`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Avatar',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
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

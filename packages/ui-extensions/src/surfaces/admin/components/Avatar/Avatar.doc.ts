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
    image: 'avatar-default.png',
    description:
      'Identify users visually when no profile image is available. This example shows an avatar displaying initials derived from a name. Click to interact with the preview.',
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
              'Represent unknown users with a generic icon. This example shows a placeholder avatar when no initials or image are provided. Click to interact with the preview.',
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
              'Display profile photos with graceful error handling. This example shows an avatar with a source image that falls back to initials if the image fails to load. Click to interact with the preview.',
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
              'Adapt avatar prominence to different UI contexts. This example shows all five available sizes from small-200 to large-200. Click to interact with the preview.',
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
              'Display initials of varying lengths consistently. This example shows avatars with 2, 3, and 4 character initials. Click to interact with the preview.',
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
              'Ensure visual consistency across the interface. This example shows that avatars with identical initials always display the same background color. Click to interact with the preview.',
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
              'Show customer identities in list views. This example shows avatars paired with customer names in a vertical stack layout. Click to interact with the preview.',
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
              'Build rich merchant profile cards. This example shows an avatar combined with Section, Heading, and Text components for a complete layout. Click to interact with the preview.',
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
        ],
      },
    ],
  },
};

export default data;

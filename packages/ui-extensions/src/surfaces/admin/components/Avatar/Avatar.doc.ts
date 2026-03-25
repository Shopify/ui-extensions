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
      sectionContent: `- **Choose appropriate sizes**: Use smaller sizes for compact contexts like tables and lists, and larger sizes for profile pages where the person is the primary focus.
- **Provide meaningful alt text**: Describe the avatar content like **Sarah Chen** or **Acme Corporation**, or use empty alt text if the name appears next to the avatar as text.
- **Position near related content**: Place avatars adjacent to the names or entities they represent for clear associations in lists, tables, or cards.`,
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
        'The avatar component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-web-components#handling-events).',
      type: 'AvatarEvents',
    },
  ],
  defaultExample: {
    image: 'avatar-default.png',
    description:
      'Identify users visually when no profile image is available. This example displays an avatar with initials derived from a name.',
    codeblock: {
      title: 'Display initials',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
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
              'Represent unknown users with a generic icon. This example displays a placeholder avatar when no initials or image are provided.',
            codeblock: {
              title: 'Show a placeholder avatar',
              tabs: [
                {
                  code: './examples/default-avatar-no-props.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Display profile photos with graceful error handling. This example presents an avatar with a source image that falls back to initials if the image fails to load.',
            codeblock: {
              title: 'Load an image with fallback',
              tabs: [
                {
                  code: './examples/with-image-source-and-fallback.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Adapt avatar prominence to different UI contexts. This example demonstrates all five available sizes from `small-200` to `large-200`.',
            codeblock: {
              title: 'Adjust the size',
              tabs: [
                {
                  code: './examples/size-variations.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Display initials of varying lengths consistently. This example presents avatars with two, three, and four character initials.',
            codeblock: {
              title: 'Handle long names',
              tabs: [
                {
                  code: './examples/long-initials-handling.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Ensure visual consistency across the interface. This example demonstrates that avatars with identical initials always display the same background color.',
            codeblock: {
              title: 'Maintain color consistency',
              tabs: [
                {
                  code: './examples/color-consistency-demo.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Show customer identities in list views. This example pairs avatars with customer names in a vertical stack layout.',
            codeblock: {
              title: 'Display in a customer list',
              tabs: [
                {
                  code: './examples/in-customer-list-context.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Create a profile layout with multiple components. This example combines an avatar with [section](/docs/api/{API_NAME}/{API_VERSION}/web-components/layout-and-structure/section), [heading](/docs/api/{API_NAME}/{API_VERSION}/web-components/typography-and-content/heading), and [text](/docs/api/{API_NAME}/{API_VERSION}/web-components/typography-and-content/text) components.',
            codeblock: {
              title: 'Build a merchant profile card',
              tabs: [
                {
                  code: './examples/with-section-component.html',
                  language: 'preview',
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

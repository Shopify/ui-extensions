import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Avatar';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/avatar.png',
  isVisualComponent: true,
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
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'inline',
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
              'Displays a customer avatar with their initials when no profile image is available.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows a generic person icon placeholder when no user information is available.',
            codeblock: {
              title: 'Default avatar (no props)',
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
              'Loads a customer profile image with automatic fallback to initials if the image fails to load.',
            codeblock: {
              title: 'With image source and fallback',
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
              'Displays customer and merchant avatars in different sizes for various interface contexts.',
            codeblock: {
              title: 'Size variations',
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
              'Shows how the component handles store and business names of varying lengths in commerce contexts.',
            codeblock: {
              title: 'Long initials handling',
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
              'Demonstrates that identical initials always receive the same color assignment across different store types.',
            codeblock: {
              title: 'Color consistency demo',
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
              'Shows automatic fallback to initials when customer or merchant profile images fail to load.',
            codeblock: {
              title: 'Error handling example',
              tabs: [
                {
                  code: './examples/error-handling-example.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Typical usage pattern for displaying customer avatars in order lists or customer listings.',
            codeblock: {
              title: 'In customer list context',
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
              'Shows staff member avatars in different admin interface contexts.',
            codeblock: {
              title: 'Staff member profiles',
              tabs: [
                {
                  code: './examples/staff-member-profiles.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates avatar integration with other admin-ui components in a merchant card layout.',
            codeblock: {
              title: 'With card component',
              tabs: [
                {
                  code: './examples/with-card-component.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows avatars for different types of fulfillment partners in the Shopify ecosystem.',
            codeblock: {
              title: 'Fulfillment partner avatars',
              tabs: [
                {
                  code: './examples/fulfillment-partner-avatars.html',
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

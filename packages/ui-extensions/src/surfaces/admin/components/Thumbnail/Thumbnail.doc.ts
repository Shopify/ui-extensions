import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Thumbnail';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Thumbnail',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ThumbnailEvents',
    },
  ],
  defaultExample: {
    image: 'thumbnail-default.png',
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
              'Demonstrates a basic thumbnail component with a product image, showing the default base size and an alt text for accessibility.',
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
              'Shows the thumbnail component in an empty state, displaying a placeholder icon when no image source is provided.',
            codeblock: {
              title: 'Empty state',
              tabs: [
                {
                  code: './examples/empty-state.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates the various size options for the thumbnail component, showcasing small-200, base, and large sizes in a stack layout.',
            codeblock: {
              title: 'Different sizes',
              tabs: [
                {
                  code: './examples/different-sizes.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how event handlers like onload or onerror can be attached to the thumbnail component via JavaScript to handle image loading states.',
            codeblock: {
              title: 'With event handling',
              tabs: [
                {
                  code: './examples/with-event-handling.html',
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

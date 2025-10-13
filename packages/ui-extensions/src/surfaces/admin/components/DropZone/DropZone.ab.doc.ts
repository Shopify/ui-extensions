import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import shared from '../../../../docs/shared/components/DropZone';

const data: AdminReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Polaris web components',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/dropzone.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'DropZone',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'DropZoneEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'DropZoneSlots',
    },
  ],
  defaultExample: {
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
              'Demonstrates a basic drop zone that allows multiple file uploads with a simple label.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  layout: 'padding',
                },
                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                },
              ],
            },
          },
          {
            description:
              'Shows a drop zone configured specifically for uploading multiple image files.',
            codeblock: {
              title: 'Image upload',
              tabs: [
                {
                  code: './examples/image-upload.html',
                  language: 'preview',
                  layout: 'padding',
                },
                {
                  code: './examples/image-upload.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a drop zone when the file upload is required.',
            codeblock: {
              title: 'With required field',
              tabs: [
                {
                  code: './examples/required-field.html',
                  language: 'preview',
                  layout: 'padding',
                },
                {
                  code: './examples/required-field.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                },
              ],
            },
          },
          {
            description:
              'Displays a drop zone in a disabled state, preventing file uploads.',
            codeblock: {
              title: 'Disabled state',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'preview',
                  layout: 'padding',
                },
                {
                  code: './examples/disabled-state.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates restricting file uploads to specific document types like PDF and DOC.',
            codeblock: {
              title: 'File type restrictions',
              tabs: [
                {
                  code: './examples/file-type-restrictions.html',
                  language: 'preview',
                  layout: 'padding',
                },
                {
                  code: './examples/file-type-restrictions.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                },
              ],
            },
          },
          {
            description:
              'Shows a drop zone with an error message, useful for indicating file upload validation issues.',
            codeblock: {
              title: 'With error state',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'preview',
                  layout: 'padding',
                },
                {
                  code: './examples/with-error-state.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                },
              ],
            },
          },
          {
            description:
              'Illustrates advanced accessibility configuration for the drop zone, including custom accessibility labels.',
            codeblock: {
              title: 'With accessibility options',
              tabs: [
                {
                  code: './examples/with-accessibility-options.html',
                  language: 'preview',
                  layout: 'padding',
                },
                {
                  code: './examples/with-accessibility-options.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
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

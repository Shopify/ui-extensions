import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import shared from '../../../../docs/shared/components/DropZone';

const data: AdminReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Polaris web components',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/dropzone.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Set clear file type and size restrictions using the \`accept\` property
- Use the \`droprejected\` event to display meaningful error messages when uploads fail validation
- Consider using \`disabled\` to prevent uploads during processing`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- File size validation must be handled in your event handler; the component only validates file types
- The \`change\` event provides the file list but does not automatically upload files
- Multiple file selection requires the \`multiple\` attribute to be set`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `DropZone` component.',
      type: 'DropZone',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/polaris/using-polaris-web-components#event-handling).',
      type: 'DropZoneEvents',
    },
  ],
  defaultExample: {
    description:
      'Accept file uploads with drag-and-drop or click to browse. Click to interact with the preview.',
    codeblock: {
      title: 'Accept file uploads',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'padding',
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'padding',
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
              'Allow multiple file uploads with a simple label. Click to interact with the preview.',
            codeblock: {
              title: 'Allow multiple file uploads',
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
              'Upload multiple image files with visual preview. Click to interact with the preview.',
            codeblock: {
              title: 'Upload images',
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
              'Mark file upload as required for form validation. Click to interact with the preview.',
            codeblock: {
              title: 'Require file upload',
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
              'Prevent file uploads while processing. Click to interact with the preview.',
            codeblock: {
              title: 'Disable uploads during processing',
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
              'Restrict uploads to specific document types like PDF and DOC. Click to interact with the preview.',
            codeblock: {
              title: 'Restrict file types',
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
              'Show validation errors for invalid file uploads. Click to interact with the preview.',
            codeblock: {
              title: 'Show upload errors',
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
              'Configure custom accessibility labels for screen readers. Click to interact with the preview.',
            codeblock: {
              title: 'Configure accessibility labels',
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
      {
        title: 'Complete workflow',
        examples: [
          {
            description:
              'Build a file upload workflow with size and type validation, error handling, and disabled state during processing. Click to interact with the preview.',
            codeblock: {
              title: 'Upload with validation',
              tabs: [
                {
                  code: './examples/upload-with-validation.html',
                  language: 'preview',
                  layout: 'padding',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
                {
                  code: './examples/upload-with-validation.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                  customStyles: {
                    minHeight: '300px',
                  },
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

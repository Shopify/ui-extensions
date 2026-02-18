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
        'Configure the following properties on the drop zone component.',
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
      'Let users upload files by dragging or clicking to browse. This example shows a basic upload area with default prompts.',
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
              'Accept multiple files in a single interaction. This example shows the multiple attribute with a custom label.',
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
              'Preview uploaded images before submission. This example shows thumbnails generated after file selection.',
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
              'Ensure files are provided before form submission. This example shows validation using the required attribute.',
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
              'Block uploads while files are being processed. This example shows the disabled state during an active upload.',
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
              'Accept only specific file formats. This example restricts uploads to PDF and DOC files using the accept property.',
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
              'Communicate why an upload failed. This example shows error messaging when files are rejected.',
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
              'Support screen reader users with clear labels. This example shows custom accessibility announcements.',
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
              'Handle the complete upload lifecycle with validation and feedback. This example combines type and size validation, error states, and disabled state during processing.',
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

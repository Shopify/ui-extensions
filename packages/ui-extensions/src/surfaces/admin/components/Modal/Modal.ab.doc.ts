import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Modal';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/modal.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Modal',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ModalEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ModalSlots',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          customStyles: {
            minHeight: '300px',
          },
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          customStyles: {
            minHeight: '300px',
          },
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
              'Simple modal with heading and basic content for displaying information. Click the button to open the modal.',
            codeblock: {
              title: 'Basic modal',
              tabs: [
                {
                  code: './examples/basic-modal.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
                {
                  code: './examples/basic-modal.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Modal with primary and secondary action buttons. Click the button to open the confirmation modal.',
            codeblock: {
              title: 'Modal with actions',
              tabs: [
                {
                  code: './examples/confirmation-modal-with-actions.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
                {
                  code: './examples/confirmation-modal-with-actions.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Modal containing form fields demonstrating how to structure input fields within a modal. Click the button to open the modal.',
            codeblock: {
              title: 'Modal with form fields',
              tabs: [
                {
                  code: './examples/form-modal.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
                {
                  code: './examples/form-modal.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Demonstrates various modal sizes for different content requirements. Click each button to see different modal sizes.',
            codeblock: {
              title: 'Different modal sizes',
              tabs: [
                {
                  code: './examples/different-modal-sizes.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
                {
                  code: './examples/different-modal-sizes.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Modal with no padding for full-width content. Click to view the modal.',
            codeblock: {
              title: 'Modal without padding',
              tabs: [
                {
                  code: './examples/modal-without-padding.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
                {
                  code: './examples/modal-without-padding.jsx',
                  language: 'preview-jsx',
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

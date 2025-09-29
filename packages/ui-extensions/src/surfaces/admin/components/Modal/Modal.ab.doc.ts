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
                },
              ],
            },
          },
          {
            description:
              'Modal with primary and secondary actions for confirming destructive operations. Click the delete button to open the confirmation modal.',
            codeblock: {
              title: 'Confirmation modal with actions',
              tabs: [
                {
                  code: './examples/confirmation-modal-with-actions.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Modal containing a form for collecting user input. Click the edit button to open the form.',
            codeblock: {
              title: 'Form modal',
              tabs: [
                {
                  code: './examples/form-modal.html',
                  language: 'preview',
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
                },
              ],
            },
          },
          {
            description:
              'Modal with no padding for full-width content like images or custom layouts. Click to view the image modal.',
            codeblock: {
              title: 'Modal without padding',
              tabs: [
                {
                  code: './examples/modal-without-padding.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Modal displaying warning information with appropriate tone. Click to view the warning.',
            codeblock: {
              title: 'Warning modal',
              tabs: [
                {
                  code: './examples/warning-modal.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Modal showing successful operation completion. Click to view the success message.',
            codeblock: {
              title: 'Success modal',
              tabs: [
                {
                  code: './examples/success-modal.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Modal with long content that scrolls within the modal body. Click to view terms.',
            codeblock: {
              title: 'Modal with scrollable content',
              tabs: [
                {
                  code: './examples/modal-with-scrollable-content.html',
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

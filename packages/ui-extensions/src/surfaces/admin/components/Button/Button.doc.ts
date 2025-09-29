import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Button';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/button.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Button',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ButtonEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ButtonSlots',
    },
  ],
  defaultExample: {
    image: 'button-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
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
              'Demonstrates a simple button with default styling, automatically determining its visual variant and using a clear, action-oriented label.',
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
              'Showcases different button variants with varying visual emphasis, helping merchants understand action priorities through distinct styling.',
            codeblock: {
              title: 'Variants',
              tabs: [
                {
                  code: './examples/variants.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates button tones that signal the semantic importance and potential impact of different actions through color and styling.',
            codeblock: {
              title: 'Tones',
              tabs: [
                {
                  code: './examples/tones.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Showcases a button that combines a descriptive text label with an intuitive icon, enhancing visual communication of the action.',
            codeblock: {
              title: 'With icon',
              tabs: [
                {
                  code: './examples/with-icon.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates an icon-only button with an accessibility label, providing a compact interface that remains screen reader friendly.',
            codeblock: {
              title: 'Icon-only button',
              tabs: [
                {
                  code: './examples/icon-only-button.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates buttons in various loading states, providing visual feedback during different types of asynchronous operations.',
            codeblock: {
              title: 'Loading state for merchant actions',
              tabs: [
                {
                  code: './examples/loading-state-for-merchant-actions.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates buttons in different interaction states, showing how to represent disabled controls and submit actions within forms.',
            codeblock: {
              title: 'Form states',
              tabs: [
                {
                  code: './examples/form-states.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Showcases buttons that act as hyperlinks, supporting navigation to different pages, external resources, and file downloads.',
            codeblock: {
              title: 'Link buttons',
              tabs: [
                {
                  code: './examples/link-buttons.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a button group with carefully aligned actions, showing how to create a clear visual hierarchy for form submission and cancellation.',
            codeblock: {
              title: 'Product save form',
              tabs: [
                {
                  code: './examples/product-save-form.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a button pair for destructive actions, using a critical tone to emphasize the potentially irreversible nature of the operation.',
            codeblock: {
              title: 'Delete confirmation',
              tabs: [
                {
                  code: './examples/delete-confirmation.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Showcases a navigation button with an icon, enabling quick access to different administrative sections of the interface.',
            codeblock: {
              title: 'Navigation to admin sections',
              tabs: [
                {
                  code: './examples/navigation-to-admin-sections.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a button group for executing bulk operations like export and delete on multiple selected items.',
            codeblock: {
              title: 'Bulk actions',
              tabs: [
                {
                  code: './examples/bulk-actions.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Showcases a set of compact, icon-only buttons with accessibility labels, perfect for creating dense toolbar interfaces.',
            codeblock: {
              title: 'Toolbar icon buttons',
              tabs: [
                {
                  code: './examples/toolbar-icon-buttons.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates advanced button capabilities using `command`, `commandFor`, and `interestFor` properties to enable dynamic component communication.',
            codeblock: {
              title: 'Component interactions',
              tabs: [
                {
                  code: './examples/component-interactions.html',
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

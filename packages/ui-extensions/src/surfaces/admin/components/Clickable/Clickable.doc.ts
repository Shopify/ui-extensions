import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Clickable';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/clickable.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Clickable',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ClickableEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ClickableSlots',
    },
  ],
  defaultExample: {
    image: 'clickable-default.png',
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
              'A simple clickable button with a base border and padding, demonstrating the default button behavior of the Clickable component.',
            codeblock: {
              title: 'Basic Button Usage',
              tabs: [
                {
                  code: './examples/basic-button-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-button-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              "Demonstrates the Clickable component's ability to function as a link, opening the specified URL in a new browser tab when clicked.",
            codeblock: {
              title: 'Link Mode',
              tabs: [
                {
                  code: './examples/link-mode.html',
                  language: 'html',
                },

                {
                  code: './examples/link-mode.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              "A disabled submit button that can be used within a form, showing the component's form integration capabilities and disabled state.",
            codeblock: {
              title: 'Form Submit Button',
              tabs: [
                {
                  code: './examples/form-submit-button.html',
                  language: 'html',
                },

                {
                  code: './examples/form-submit-button.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates how the Clickable component can be integrated into a section layout to provide an interactive action button.',
            codeblock: {
              title: 'Section with Clickable Action',
              tabs: [
                {
                  code: './examples/section-with-clickable-action.html',
                  language: 'html',
                },

                {
                  code: './examples/section-with-clickable-action.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              "Demonstrates the use of an accessibility label to provide context for screen readers, enhancing the component's usability for users with assistive technologies.",
            codeblock: {
              title: 'Accessibility with ARIA Attributes',
              tabs: [
                {
                  code: './examples/accessibility-with-aria-attributes.html',
                  language: 'html',
                },

                {
                  code: './examples/accessibility-with-aria-attributes.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows a disabled link with an accessibility label, explaining the unavailability of a feature to users of assistive technologies.',
            codeblock: {
              title: 'Disabled Link with ARIA',
              tabs: [
                {
                  code: './examples/disabled-link-with-aria.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-link-with-aria.jsx',
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

import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/TextArea';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/textarea.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextArea',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'TextAreaEvents',
    },
  ],
  examples: {
    description: 'Component examples',
    examples: [
      {
        description:
          'Add a multi-line text input for collecting longer content from merchants. This example shows a text area with a pre-filled shipping address and a set number of visible rows.',
        image: 'textarea-default.png',
        codeblock: {
          title: 'Add a basic text area',
          tabs: [
            {
              code: './examples/default.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Collect longer text like product descriptions with a placeholder to guide input. This example shows an empty text area with placeholder text and autocomplete disabled.',
        codeblock: {
          title: 'Collect text with a placeholder',
          tabs: [
            {
              code: './examples/basic-usage.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Set a maximum character length to keep input concise, such as for SEO meta descriptions. This example shows a text area with a 160-character limit and help text explaining the constraint.',
        codeblock: {
          title: 'Limit input length with a character cap',
          tabs: [
            {
              code: './examples/seo-meta-description-with-character-limit.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Display an error message when the entered text does not meet validation requirements. This example shows a text area with a minimum length constraint and an error explaining what is needed.',
        codeblock: {
          title: 'Show a validation error',
          tabs: [
            {
              code: './examples/error-state.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Prevent editing by making a text area read-only or fully disabled. This example shows a read-only field for viewing order notes and a disabled field for internal comments.',
        codeblock: {
          title: 'Disable or make a text area read-only',
          tabs: [
            {
              code: './examples/disabled-and-read-only.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;

import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Form';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'form-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'FormElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'FormElementEvents',
    },
  ],
  defaultExample: {
    image: 'form-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-form.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Group multiple input fields for submission using `s-form`. This example demonstrates a form with a text field, email field, text area, and a submit button.',
        codeblock: {
          title: 'Build a form with multiple fields',
          tabs: [
            {
              code: './examples/form-with-fields.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
- Wrap around all form input elements.
- Forms can have only one submit button and it must be at the end of the form.`,
    },
  ],
};

export default data;

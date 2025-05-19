import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Form';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'form-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'FormProps',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
        - Wrap around all form input elements.
        - Forms can have only one submit button and it must be at the end of the form.
      `,
    },
  ],
};

export default data;

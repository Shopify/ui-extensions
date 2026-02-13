import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Form',
  description:
    "The Form component wraps form controls and enables implicit submission, allowing users to submit from any input by pressing **Enter**. Use Form to group related input fields and handle form submission through JavaScript event handlers.\n\nUnlike HTML forms, Form doesn't automatically submit data using HTTP—you must register an `onSubmit` event to process form data programmatically. For Shopify Functions configuration forms, use [FunctionSettings](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/functionsettings).",
  requires: '',
  thumbnail: 'form-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Form component.',
      type: 'FormProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'form-default.png',
    codeblock: {
      title: 'Simple form implementation',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Form/examples/basic-form.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-form.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use Form to use the save bar:** Wrapping inputs in a Form component enables automatic integration with the Shopify admin's save bar, providing a consistent save/discard experience for merchants.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Form doesn't provide built-in form state management or validation. You must manage field values, errors, and dirty state yourself.
- The save bar appearance and behavior is controlled by the Shopify admin. You can't customize its position, text, or button labels.
- Form doesn't support nested forms. Only one Form component should be used per extension view.`,
    },
  ],
  related: [],
};

export default data;

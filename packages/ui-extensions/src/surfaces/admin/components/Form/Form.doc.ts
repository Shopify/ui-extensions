import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Form',
  description:
    "The Form component wraps form controls and manages submission and reset behavior through the Shopify admin's save bar.\n\nUnlike HTML forms, Form doesn't automatically submit data using HTTP—you must handle form data programmatically in your `onSubmit` callback. For Shopify Functions configuration forms, use [FunctionSettings](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/functionsettings).",
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
    description:
      'Submit a warehouse SKU and storage location, or cancel to close the modal. This example uses `Form` with `onSubmit` and `onReset` callbacks around two [TextField](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield) inputs, where `onReset` calls `close()` to dismiss the modal.',
    codeblock: {
      title: 'Submit product metadata form',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Form/examples/basic-form.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-form.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Handle cancellation with the `onReset` callback to close the modal without saving. This example pairs submit and reset actions using [InlineStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/inlinestack) to right-align the cancel and save buttons, following standard dialog patterns.',
        codeblock: {
          title: 'Handle form submit and cancel',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Form/examples/form-reset.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/form-reset.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Organize complex forms with [Section](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/section) components to group related fields together. This example splits a fulfillment provider setup into "Provider details" and "Contact information" sections, making long forms easier to scan.',
        codeblock: {
          title: 'Organize form with sections',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Form/examples/form-sections.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/form-sections.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
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

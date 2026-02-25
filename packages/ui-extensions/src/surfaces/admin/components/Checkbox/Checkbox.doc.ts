import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkbox',
  description:
    'The Checkbox component provides a binary toggle for a single option that merchants can turn on or off. Use it for boolean settings like agreeing to terms, enabling a feature, or opting into a notification.\n\nFor selecting from a group of related options, use [ChoiceList](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/choicelist).',
  requires: '',
  thumbnail: 'checkbox-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Checkbox component.',
      type: 'CheckboxProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'checkbox-default.png',
    description:
      'Toggle automatic inventory sync on or off. This example uses `Checkbox` with a `checked` state, and a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that saves the setting and closes the modal.',
    codeblock: {
      title: 'Toggle feature settings',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Checkbox/examples/basic-checkbox.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-checkbox.example.ts',
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
          'Require merchants to agree to terms before connecting a service using the `error` prop for validation. This example shows an inline error when the merchant attempts to submit without checking the box, which requires explicit consent before proceeding.',
        codeblock: {
          title: 'Validate required agreement',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Checkbox/examples/checkbox-error.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/checkbox-error.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Present multiple independent options as a group of checkboxes for channel publishing. This example renders three checkboxes (Online Store, Point of Sale, and Wholesale), letting merchants select any combination of sales channels for a product.',
        codeblock: {
          title: 'Select multiple channel options',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Checkbox/examples/checkbox-multiple.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/checkbox-multiple.example.ts',
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
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use positive, clear labels:** Write checkbox labels as positive statements that describe what happens when checked. For example, use "Send email notifications" instead of "Disable email notifications".
- **Use for independent choices:** Each checkbox should control a single, independent setting. If options are mutually exclusive, use a [ChoiceList](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/choicelist) with radio buttons instead.
- **Don't require checkboxes to be unchecked:** Requiring that a checkbox must remain unchecked creates a confusing experience. Checkboxes should feel optional even when they are required for submission.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Checkbox doesn't support an indeterminate (mixed) state. It is either checked or unchecked.
- The \`label\` prop only accepts a string. Rich content like links or formatted text inside the label isn't supported.
- Checkbox has both \`checked\` and \`value\` props that serve the same purpose (\`value\` is an alias for \`checked\`). Use one or the other, not both, to avoid confusion.
- Checkbox doesn't include a description or helper text prop. To add explanatory text below the checkbox, place a [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) or [Paragraph](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/paragraph) component adjacent to it.`,
    },
  ],
  related: [],
};

export default data;

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
    codeblock: {
      title: 'Add a simple Checkbox',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Checkbox/examples/basic-checkbox.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-checkbox.example.ts',
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

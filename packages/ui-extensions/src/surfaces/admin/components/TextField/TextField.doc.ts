import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'Use a text field to allow merchants to enter or edit text. Text fields provide a single-line input area for collecting string values from users.',
  requires: '',
  thumbnail: 'textfield-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'TextField',
      description:
        'A text input field that allows users to enter and edit text.',
      type: 'TextFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'text-field-default.png',
    codeblock: {
      title: 'Basic TextField example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-text-field.example.tsx',
          language: 'tsx',
        },
        {
          title: 'Preview',
          code: './examples/preview.html',
          language: 'preview',
        },
      ],
    },
  },
  //   subSections: [
  //     {
  //       type: 'Generic',
  //       anchorLink: 'guidelines',
  //       title: 'Guidelines',
  //       sectionContent: `
  // - Use clear and concise labels that describe the requested input
  // - Use placeholder text to provide guidance on the expected value
  // - Consider using prefix or suffix to provide additional context (e.g., "@" or ".com")
  // - Use validation to ensure the input meets requirements
  // - Indicate required fields clearly
  // - Provide error messages when validation fails
  //       `,
  //     },
  //     {
  //       type: 'Generic',
  //       anchorLink: 'properties',
  //       title: 'Properties',
  //       sectionContent: `
  // | Prop | Type | Description |
  // |------|------|-------------|
  // | label | string | The label for the text field |
  // | value | string | The current value of the text field |
  // | placeholder | string | Placeholder text to show when the field is empty |
  // | error | string | Error message to display when the input is invalid |
  // | disabled | boolean | Whether the field is disabled |
  // | readOnly | boolean | Whether the field is read-only |
  // | required | boolean | Whether the field is required |
  // | prefix | string | Text to display before the input |
  // | suffix | string | Text to display after the input |
  // | icon | IconType | Icon to display within the text field |
  // | maxLength | number | Maximum number of characters allowed |
  // | minLength | number | Minimum number of characters required |
  //       `,
  //     },
  //   ],
  related: [
    {
      type: 'component',
      name: 'TextArea',
      url: '/docs/api/admin-extensions/components/forms/textarea',
    },
    {
      type: 'component',
      name: 'EmailField',
      url: '/docs/api/admin-extensions/components/forms/emailfield',
    },
    {
      type: 'component',
      name: 'NumberField',
      url: '/docs/api/admin-extensions/components/forms/numberfield',
    },
  ],
};

export default data;

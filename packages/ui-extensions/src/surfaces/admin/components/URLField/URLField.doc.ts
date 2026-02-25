import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'URLField',
  description:
    'The URLField component provides a text input optimized for URL entry. It displays a URL-appropriate virtual keyboard on mobile devices and supports autocomplete hints for web addresses.\n\nFor general text input, use [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield).',
  requires: '',
  thumbnail: 'urlfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the URLField component.',
      type: 'URLFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'urlfield-default.png',
    description:
      'Record an external product source URL and save it from an action modal. This example uses `URLField` to capture the address, with a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that saves the source URL.',
    codeblock: {
      title: 'Set external product source URL',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/URLField/examples/basic-urlfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-urlfield.example.ts',
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
          'Validate that a webhook endpoint uses HTTPS using the `error` prop and `required` attribute. This example checks the URL protocol on each keystroke and displays an inline error for non-HTTPS URLs, so merchants can only register secure webhook endpoints.',
        codeblock: {
          title: 'Validate webhook endpoint protocol',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/URLField/examples/urlfield-validation.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/urlfield-validation.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          "Pre-populate a URL field with the product's storefront address using `data.selected` and the `readOnly` prop. This example shows the product storefront URL as a reference alongside an editable field for the external catalog link.",
        codeblock: {
          title: 'Pre-fill product storefront link',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/URLField/examples/urlfield-prefilled.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/urlfield-prefilled.example.ts',
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
      sectionContent: `- **Use URLField instead of TextField for URLs:** URLField triggers a URL-optimized keyboard on mobile devices that includes quick access to common characters like "/", ".", and ".com".
- **Provide a helpful placeholder:** Use a placeholder like "https://example.com" to communicate the expected format without replacing the label.
- **Validate URL format on blur:** Use the \`onBlur\` callback to check the URL format and set the \`error\` prop with a clear message like "Enter a valid URL starting with https://".`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- URLField doesn't perform built-in URL validation. You must validate the format yourself and set the \`error\` prop accordingly.
- The component doesn't automatically prepend "https://" to entered values. If you need a protocol prefix, validate and transform the value in your \`onChange\` handler.
- URLField doesn't provide a clickable link preview or a way to test the entered URL. For URL verification, consider adding a separate [Link](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link) or [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) that opens the URL.`,
    },
  ],
  related: [],
};

export default data;

import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/URLField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/urlfield.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Validate URL structure:** Browser validation for URL fields is minimal and inconsistent. Implement your own validation to ensure URLs have proper structure, valid protocols, and acceptable formats for your use case.
- **Make the expected format clear:** Users need to know whether to include protocols, what protocols are acceptable, and what type of URL you're expecting. Show complete example URLs in placeholders to demonstrate the required format.
- **Handle missing protocols gracefully:** Users often forget to include \`https://\` when entering URLs. Decide whether to automatically add it, accept URLs without protocols, or show clear error messages explaining what's missing.
- **Set realistic length constraints:** URL length limits vary across browsers and servers. Set constraints based on where the URL will be used, not just arbitrary maximums. Communicate these limits clearly when they're necessary.
- **Provide clear context:** Make the URL's purpose obvious through labels and help text. Users entering a product image URL have different needs than those entering a social media profile link or external reference.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The HTML5 URL input type (\`type="url"\`) has very basic validation that varies by browser. Most browsers only check for **://** somewhere in the string. Invalid URLs like **ht://invalid** may pass browser validation. Always implement comprehensive server-side URL validation.
- While RFC 3986 doesn't specify a maximum URL length, most browsers support URLs up to 2,048 characters. Many servers have 8,192 character limits for request URIs. Setting \`maxLength\` above 2,048 may create URLs that work in some contexts but fail in others.
- URLs starting with **//** (protocol-relative, like **//example.com**) are technically valid but may not pass HTML5 URL validation. Users must include the full protocol (http:// or https://).
- This component doesn't automatically prepend **https://** if users omit the protocol. A value like **example.com** will be invalid and require manual correction. You must implement this behavior yourself if desired.
- URLs with special characters (spaces, quotes, Unicode) should be percent-encoded (%20, %22), but the component doesn't auto-encode. Provide guidance to users or implement encoding in your validation logic.`,
    },
  ],
  definitions: [
    {
      title: 'URLField',
      description:
        'Configure the following properties on the `URLField` component.',
      type: 'URLField',
    },
    {
      title: 'Events',
      description:
        'The `URLField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'URLFieldEvents',
    },
  ],
  defaultExample: {
    image: 'urlfield-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          title: 'HTML',
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
              'Demonstrates a simple URL input field with a label and placeholder, showing the minimal configuration needed for collecting a URL.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows a URL input field with built-in validation, including required status, minimum and maximum length constraints, and a custom error message for invalid inputs.',
            codeblock: {
              title: 'With validation',
              tabs: [
                {
                  code: './examples/with-validation.html',
                  language: 'html',
                },

                {
                  code: './examples/with-validation.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a URL field pre-populated with a default value, set to read-only mode to prevent user modifications.',
            codeblock: {
              title: 'With default value',
              tabs: [
                {
                  code: './examples/with-default-value.html',
                  language: 'html',
                },

                {
                  code: './examples/with-default-value.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows a URL field in a disabled state, displaying a pre-filled URL that cannot be edited by the user.',
            codeblock: {
              title: 'Disabled state',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-state.jsx',
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

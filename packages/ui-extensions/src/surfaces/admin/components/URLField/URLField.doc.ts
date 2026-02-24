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
      sectionContent: `- The HTML5 URL input type (\`type="url"\`) has very basic validation that varies by browser. Most browsers only check for **://** somewhere in the string. Invalid URLs like **ht://invalid** might pass browser validation. Always implement comprehensive server-side URL validation.
- While RFC 3986 doesn't specify a maximum URL length, the practical recommended limit for broad compatibility across web clients and servers is 2,048 characters. Modern browsers support much longer URLs, but many servers have lower limits for request URIs. Setting \`maxLength\` above 2,048 might create URLs that work in some contexts but fail in others.
- URLs starting with **//** (protocol-relative, like **//example.com**) are technically valid but might not pass HTML5 URL validation. Users must include the full protocol (http:// or https://).
- This component doesn't automatically prepend **https://** if merchants omit the protocol. A value like **example.com** will be invalid and require manual correction. You must implement this behavior yourself if desired.
- URLs with special characters (spaces, quotes, Unicode) should be percent-encoded (%20, %22), but the component doesn't auto-encode. Provide guidance to merchants or implement encoding in your validation logic.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the URL field component.',
      type: 'URLField',
    },
    {
      title: 'Events',
      description:
        'The URL field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'URLFieldEvents',
    },
  ],
  defaultExample: {
    description:
      'Capture web addresses from users with URL-specific input. This example pairs a label with placeholder text guiding the expected format.',
    codeblock: {
      title: 'Collect a URL',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Enforce URL requirements before form submission. This example configures required validation with length constraints and custom error messages.',
            codeblock: {
              title: 'Set validation constraints',
              tabs: [
                {
                  code: './examples/with-validation.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Display a URL that users can copy but not edit. This example uses readOnly to prevent changes while keeping the value selectable and included in form submissions.',
            codeblock: {
              title: 'Pre-fill a URL',
              tabs: [
                {
                  code: './examples/with-default-value.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Show a URL in a non-interactive state. This example uses disabled to gray out the field and exclude it from form submission.',
            codeblock: {
              title: 'Show a disabled field',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'preview',
                  title: '',
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

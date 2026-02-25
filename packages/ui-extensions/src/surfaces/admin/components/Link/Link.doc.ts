import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Link',
  description:
    'The Link component lets merchants navigate to a URL or trigger an action when pressed. Links render as inline text styled to indicate interactivity, and support custom tones and accessibility labels.\n\nFor action-oriented interactions like submitting or deleting, use [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button). To make a custom area clickable with layout control, use [Pressable](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/pressable).',
  requires: '',
  thumbnail: 'link-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Link component.',
      type: 'LinkProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'link-default.png',
    description:
      'Navigate to extension settings and a sync dashboard without leaving the admin. This example uses `Link` with `extension://` URLs to open internal extension pages from a product details block.',
    codeblock: {
      title: 'Navigate to app pages',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Link/examples/app-link.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/app-link.example.ts',
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
          'Open external URLs in new tabs using `target="_blank"`. This example links to the product\'s storefront page and Shopify documentation, building the storefront URL from the product ID in `data.selected`.',
        codeblock: {
          title: 'Open external links in new tabs',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Link/examples/external-link.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/external-link.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Navigate to Shopify admin pages using the `shopify://` protocol. This example links to the orders list, the product\'s inventory page, and the product editor, using `tone="critical"` on the edit link to draw attention to it.',
        codeblock: {
          title: 'Link to Shopify admin sections',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Link/examples/shopify-section-link.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/shopify-section-link.example.ts',
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
      sectionContent: `- **Use descriptive link text:** Write link text that clearly describes where the link goes or what it does. Avoid vague labels like "Click here" or "Learn more" without additional context. Screen readers often navigate by listing all links on a page, so each link should make sense on its own.
- **Choose the right component for the action:** Use Link for navigation and [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) for actions. If the interaction changes data or triggers a process (like saving or deleting), use a Button instead of a Link.
- **Use \`target="_blank"\` sparingly:** Opening links in a new tab can be disorienting. Only use \`target="_blank"\` for links that take the merchant away from an in-progress workflow, such as linking to external documentation.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Links to external domains outside of the Shopify admin might be blocked or display a redirect confirmation page depending on the merchant's browser settings and the extension context.
- The Link component renders inline with surrounding text. To create a block-level clickable area with custom layout, use the [Pressable](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/pressable) component instead.
- The \`onClick\` callback fires before navigation occurs. If the callback throws an error, navigation might still proceed. You can't use \`onClick\` to conditionally prevent navigation.`,
    },
  ],
  related: [],
};

export default data;

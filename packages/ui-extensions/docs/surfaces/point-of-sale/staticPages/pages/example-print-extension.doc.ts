import type {LandingTemplateSchema} from '@shopify/generate-docs';

const examplePath = '../examples/print-example';

const data: LandingTemplateSchema = {
  title: 'Build a print extension',
  description:
    'Learn how to build a POS print extension that generates, previews, and prints custom documents.',
  id: 'example-print-extension',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'intro',
      title: 'Introduction',
      sectionContent: `
This tutorial shows you how to create a print extension that lets merchants generate and preview documents before printing.

What you'll achieve:
- Create a backend service that serves print-ready documents
- Build a POS extension with preview and print capabilities
- Implement error handling for a reliable printing experience
- Test your extension in a development environment

![Print Extension in Action](/assets/api/pos/pos-ui-extensions-print-example.gif)
      `,
      sectionCard: [
        {
          name: 'Print API Reference',
          subtitle: 'Learn about the Print API',
          url: '/docs/api/pos-ui-extensions/apis/print-api',
          type: 'api',
        },
        {
          name: 'PrintPreview Component',
          subtitle: 'Implement document previews',
          url: '/docs/api/pos-ui-extensions/components/printpreview',
          type: 'component',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'requirements',
      title: 'Before you start',
      sectionContent: `
To make the most of this tutorial, you'll need:

* Complete the [Getting started guide](/docs/api/pos-ui-extensions/getting-started)
  - Partner account
  - Development store with POS
  - Latest version of Shopify CLI
  - Basic app setup (access scopes only needed if accessing Shopify data)
      `,
      sectionNotice: [
        {
          type: 'note',
          title: 'Access scopes',
          sectionContent: `
This tutorial uses simple HTML documents. If you plan to include order, customer or any other Shopify admin data in your prints, you'll need additional access scopes.

[Learn more about access scopes](/docs/api/usage/access-scopes)`,
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'backend-setup',
      title: 'Create a route to serve printable documents',
      sectionContent: `
First, create a new route file at \`app/routes/print.js\` that will serve your printable documents. This example uses [Remix](https://remix.run/docs/en/main/guides/mdx#routes), but you can adapt the concepts to your preferred framework.

> Need help setting up a Remix server? Check out the [Shopify App Remix documentation](/docs/api/shopify-app-remix).

Let's walk through each part of the implementation:

1. Set up the route and handle authentication with Shopify
2. Process URL parameters to determine which documents to generate
3. Generate HTML content with proper styling for each document type
4. Return a properly formatted response with CORS headers

Here's a complete example that supports multiple document types:
      `,
      codeblock: {
        title: 'Print Route Implementation',
        tabs: [
          {
            title: '/app/routes/print.js',
            code: `${examplePath}/remix-route-example.js`,
            language: 'javascript',
          },
        ],
      },
      sectionNotice: [
        {
          type: 'warning',
          title: 'Print document requirements',
          sectionContent: `
- Use only static HTML and CSS - JavaScript won't execute in print documents
- Include all styles in the <head> section or inline
- Use @media print CSS rules for print-specific styling
- Ensure proper CORS headers are set for POS access`,
        },
        {
          type: 'note',
          title: 'Page breaks',
          sectionContent: `When returning multiple documents, use CSS page breaks to ensure proper printing:

\`\`\`css
@media print {
  .page-break {
    page-break-after: always;
  }
}
\`\`\``,
        },
        {
          type: 'info',
          title: 'Email obfuscation',
          sectionContent: `When using Cloudflare tunnels for development, wrap email addresses in HTML comments to prevent obfuscation:

\`<!--email_off-->example@email.com<!--/email_off-->\`

[Learn more about email obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/#prevent-cloudflare-from-obfuscating-email)`,
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'extension-ui',
      title: 'Build the extension UI',
      sectionContent: `
Your print extension needs two main components that work together to provide a complete printing experience:

1. A **Tile** on the POS smart grid that launches your extension
2. A **Modal** that implements the printing workflow:
   - Document selection with a list of available templates
   - Document preview before printing
   - Print button with proper loading and error states

Let's walk through the implementation:

1. Create a tile component that opens the modal
2. Set up a Navigator to manage multiple screens
3. Implement document selection with a List component
4. Add \`PrintPreview\` and execute Print API with button

Here's how to implement both components:
      `,
      codeblock: {
        title: 'Extension Components',
        tabs: [
          {
            title: 'HomeTile.tsx',
            code: `${examplePath}/print-tile.tsx`,
            language: 'tsx',
          },
          {
            title: 'HomeModal.tsx',
            code: `${examplePath}/print-modal.tsx`,
            language: 'tsx',
          },
        ],
      },
      sectionNotice: [
        {
          type: 'note',
          title: 'Key components',
          sectionContent: `
- The \`Tile\` component uses \`api.action.presentModal()\` to open the modal
- The \`Navigator\` component manages the document selection and preview screens
- The \`List\` component with toggle switches for document selection
- The \`PrintPreview\` component shows selected documents before printing
- Loading states and error handling ensure a smooth user experience`,
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'extension-config',
      title: 'Configure your extension',
      sectionContent: `
Configure your extension with the necessary permissions and settings in the \`shopify.extension.toml\` file:
      `,
      codeblock: {
        title: 'Extension Configuration',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: `${examplePath}/shopify.extension.toml`,
            language: 'toml',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'testing',
      title: 'Testing your extension',
      sectionContent: `
To test your print extension:

1. Navigate to your app directory:
   \`\`\`bash
   cd <directory>
   \`\`\`

2. Start your development server:
   \`\`\`bash
   shopify app dev
   \`\`\`

2. Press \`p\` to open the developer console
3. In the developer console, click on the view mobile button to preview your extension
   - [Learn more about how to test your extension](/docs/api/pos-ui-extensions/unstable/getting-started#step-2-run-the-local-extension-in-your-development-store)
4. Click the \`Print Tutorial\` tile
5. Select a template, press next, and then print

Congratulations! You've built a print extension that generates, previews, and prints custom documents.
      `,
      sectionNotice: [
        {
          type: 'note',
          title: 'Testing tip',
          sectionContent:
            "Use your browser's developer tools to monitor network requests and check for any CORS or authentication issues.",
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'deploy-release',
      title: 'Deploy and release',
      sectionContent: `
Refer to [Deploy app extensions](/docs/apps/deployment/app-versions) for more information.
      `,
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'troubleshooting',
      title: 'Solving common challenges',
      sectionContent: `
[Learn more about troubleshooting your extension](/docs/api/pos-ui-extensions/unstable/troubleshooting)
      `,
      accordionContent: [
        {
          title: 'Preview not appearing?',
          description: `
Here's what might be happening:
* Your CORS settings might be blocking the preview
* Authentication could be failing
* The document URL might be incorrect

Quick fix: Open your browser's developer tools and check the network tab for any failed requests.
          `,
        },
        {
          title: 'Documents looking wrong?',
          description: `
Common formatting issues:
* Print-specific styles might be missing
* Check if your document format is supported
          `,
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'next-steps',
      title: 'Next steps',
      sectionContent: `
- [Debug](/docs/apps/pos/ui-extensions/debugging) your POS UI Extension.

- Learn more about building with POS UI extensions by exploring the [POS UI extension reference](/docs/api/pos-ui-extensions).
      `,
    },
    {
      type: 'Resource',
      anchorLink: 'resources',
      title: 'Keep learning',
      resources: [
        {
          name: 'Print API Documentation',
          subtitle: 'Advanced printing features',
          url: '/docs/api/pos-ui-extensions/apis/print-api',
          type: 'api',
        },
        {
          name: 'PrintPreview Documentation',
          subtitle: 'Document preview implementation',
          url: '/docs/api/pos-ui-extensions/components/printpreview',
          type: 'component',
        },
        {
          name: 'Debugging Guide',
          subtitle: 'Troubleshoot print extensions',
          url: '/docs/apps/pos/ui-extensions/debugging',
          type: 'debug',
        },
      ],
    },
  ],
};

export default data;

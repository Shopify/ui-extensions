import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'The Banner component displays a prominent message to merchants with an optional title, tone, dismiss button, and action buttons. Use it for important information, warnings, errors, or success confirmations that require merchant attention.\n\nFor small inline status labels, use [Badge](/docs/api/admin-extensions/{API_VERSION}/ui-components/feedback-and-status-indicators/badge).',
  requires: '',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Banner component.',
      type: 'BannerProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Feedback and status indicators',
  defaultExample: {
    image: 'banner-default.png',
    description:
      'Show a product sync failure with a retry action. This example renders a dismissible `Banner` with a `critical` tone, a primary action [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that retries the sync, and a message explaining the issue.',
    codeblock: {
      title: 'Warn about API sync failure',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Banner/examples/basic-banner.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-banner.example.ts',
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
          'Show a `success` banner after completing a product update to give merchants immediate visual confirmation. This example renders a dismissible banner with a message that includes the product ID, so merchants know exactly which resource was updated.',
        codeblock: {
          title: 'Confirm successful product update',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Banner/examples/banner-success.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/banner-success.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Show `warning` validation issues at the top of an [action modal](/docs/api/admin-extensions/{API_VERSION}/components/settings-and-templates/adminaction) before merchants submit. This example combines a banner with `secondaryAction` to let merchants review or dismiss the warning before proceeding.',
        codeblock: {
          title: 'Display form validation warnings',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Banner/examples/banner-warning.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/banner-warning.example.ts',
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
      sectionContent: `- **Focus on a single message:** Present one piece of information or required action per banner to maintain clarity. If you have multiple messages, stack separate banners.
- **Keep messages concise:** Write content that merchants can quickly scan and understand without spending time deciphering the meaning or next steps.
- **Provide clear actions:** For warning and critical banners, include a \`primaryAction\` or \`secondaryAction\` with specific next steps so merchants know how to proceed.
- **Use tones consistently:** Use one tone consistently for the same status across your extension, such as \`info\` for general information. Don't mix \`warning\` and \`critical\` for the same severity level — merchants will lose trust in the signal if tones are inconsistent.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The dismissed state doesn't persist across page loads or sessions. You must implement your own persistence logic using app storage or server-side state if you want a banner to stay dismissed.
- Multiple banners stack vertically without built-in prioritization or queueing. If you show several banners at once, they all appear simultaneously. Implement your own queueing logic if you need to show one at a time.
- Banner supports only plain text strings, [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) components, and [Link](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link) components as content. For complex layouts with multiple elements, use a [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) component instead.`,
    },
  ],
  related: [],
};

export default data;

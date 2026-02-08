import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'The `Banner` component displays a prominent message to merchants with an optional title, tone, dismiss button, and action buttons. Use it for important information, warnings, errors, or success confirmations that require merchant attention.\n\nFor small inline status labels, use [`Badge`](/docs/api/admin-extensions/{API_VERSION}/ui-components/feedback-and-status-indicators/badge).',
  requires: '',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Banner` component.',
      type: 'BannerProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Feedback and status indicators',
  defaultExample: {
    image: 'banner-default.png',
    codeblock: {
      title: 'Simple Banner example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Banner/examples/basic-Banner.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Banner.example.ts',
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
      sectionContent: `- **Focus on a single message:** Present one piece of information or required action per banner to maintain clarity. If you have multiple messages, stack separate banners.
- **Keep messages concise:** Write content that merchants can quickly scan and understand without spending time deciphering the meaning or next steps.
- **Provide clear actions:** For warning and critical banners, include a \`primaryAction\` or \`secondaryAction\` with specific next steps so merchants know how to proceed.
- **Choose the right tone:** Use \`info\` for general information, \`success\` for confirmation messages, \`warning\` for issues that need attention, and \`critical\` for urgent problems requiring immediate action.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The dismissed state doesn't persist across page loads or sessions. You must implement your own persistence logic using app storage or server-side state if you want a banner to stay dismissed.
- Multiple banners stack vertically without built-in prioritization or queueing. If you show several banners at once, they all appear simultaneously. Implement your own queueing logic if you need to show one at a time.
- \`Banner\` content (children) doesn't support complex layouts. Use simple text, [\`Text\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text), or [\`Link\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link) components as banner children. For complex content, consider a [\`Section\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) component instead.`,
    },
  ],
  related: [],
};

export default data;

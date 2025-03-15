import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    "Use banners to communicate important messages to merchants. They are designed to be noticeable but not disruptive to the merchant's workflow.",
  requires: '',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Banner',
      description: 'A component for displaying prominent messages or alerts.',
      type: 'BannerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'banner-default.png',
    codeblock: {
      title: 'Basic Banner example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-banner.example.tsx',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'tone',
      title: 'Tone',
      sectionContent: `
- Use \`info\` for general information or updates
- Use \`success\` for successful operations or positive messages
- Use \`warning\` for important notices that require attention
- Use \`critical\` for errors or critical issues that need immediate attention
      `,
    },
  ],
  related: [
    {
      type: 'component',
      name: 'Badge',
      url: '/docs/api/admin-extensions/components/feedback/badge',
    },
  ],
};

export default data;

import {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Patterns',
  description:
    'These patterns help you write great apps. blah blah blah. Lorem ipsum dolor sit amet.',
  id: 'pattern-overview',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'pattern-1',
      title: 'Pattern 1',
      sectionContent:
        'This is a description of pattern 1. It shows how to use the pattern. Lorem ipsum dolor sit amet.',
      image: 'resource-detail.png',
      altText: 'alt text for image',
      codeblock: {
        title: 'Query Shopify data',
        tabs: [
          {
            code: './examples/direct-api-fetch.jsx',
            language: 'tsx',
            title: 'Fetch Product data',
          },
          {
            code: './examples/direct-api-query.jsx',
            language: 'tsx',
            title: 'Query Product data',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'pattern-2',
      title: 'Pattern 2',
      sectionContent:
        'This is a description of pattern 2. It shows how to use the pattern. Lorem ipsum dolor sit amet.',
      image: 'resource-detail.png',
      altText: 'alt text for image',
      codeblock: {
        title: 'Query Shopify data',
        tabs: [
          {
            code: './examples/direct-api-fetch.jsx',
            language: 'tsx',
            title: 'Fetch Product data',
          },
          {
            code: './examples/direct-api-query.jsx',
            language: 'tsx',
            title: 'Query Product data',
          },
        ],
      },
    },
  ],
};

export default data;

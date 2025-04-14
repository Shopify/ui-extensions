import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Using Polaris Web Components',
  description:
    "Polaris web components are Shopify's UI toolkit for building interfaces that match the Shopify Admin design system. This toolkit provides a set of custom HTML elements (web components) that you can use to create consistent, accessible, and performant user interfaces for the Shopify App Home and UI Extensions.",
  category: 'Polaris web components',
  isVisualComponent: false,
  related: [],
  examples: {
    description: '',
    exampleGroups: [
      {
        title: 'Element Naming Convention',
        examples: [
          {
            description:
              'All Polaris web components use the `s-` prefix to avoid conflicts with standard HTML elements.',
            codeblock: {
              title: '',
              tabs: [
                {
                  code: './examples/element-naming-convention.html',
                  language: 'html',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Ayyyyyy',
        examples: [
          {
            description:
              'Navigates to the specified screen. It is important to note that any screens you wish to navigate to must already exist in the Navigator.',
            codeblock: {
              title: 'Yo',
              tabs: [
                {
                  code: '../Button/examples/default.html',
                },
              ],
            },
          },
          {
            description:
              'Navigates to the specified screen. It is important to note that any screens you wish to navigate to must already exist in the Navigator.',
            codeblock: {
              title: 'Yo',
              tabs: [
                {
                  code: '../Button/examples/default.html',
                },
              ],
            },
          },
          {
            description:
              'Navigates to the specified screen. It is important to note that any screens you wish to navigate to must already exist in the Navigator.',
            codeblock: {
              title: 'Yo',
              tabs: [
                {
                  code: '../Button/examples/default.html',
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

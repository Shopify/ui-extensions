import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Box';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/box.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Creating custom designs when you can't build what you need with the existing components.
  - Setting up specific stylings such as background colors, paddings, and borders.
  - Nesting with other components.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Box',
    },
    {
      title: 'Slots',
      description: '',
      type: 'BoxSlots',
    },
  ],
  defaultExample: {
    image: 'box-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
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
              'Demonstrates creating a simple container with padding, base background, border, and rounded corners to group and highlight product information.',
            codeblock: {
              title: 'Basic container',
              tabs: [
                {
                  code: './examples/basic-container.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates using a box with responsive padding to create an adaptable container for shipping information that can adjust to different screen or container sizes.',
            codeblock: {
              title: 'Responsive shipping notice',
              tabs: [
                {
                  code: './examples/responsive-shipping-notice.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows how to use boxes with ARIA roles and visibility controls to create semantic, screen-reader-friendly status and informational messages.',
            codeblock: {
              title: 'Accessible status messages',
              tabs: [
                {
                  code: './examples/accessible-status-messages.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates creating nested, hierarchical layouts for merchant interfaces, showing how boxes can be used to organize inventory status and product information sections.',
            codeblock: {
              title: 'Complex merchant dashboard layout',
              tabs: [
                {
                  code: './examples/complex-merchant-dashboard-layout.html',
                  language: 'preview',
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

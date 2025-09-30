import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Spinner';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/spinner.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Spinner',
    },
  ],
  defaultExample: {
    image: 'spinner-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
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
              'Standard loading spinner with accessibility label for screen readers.',
            codeblock: {
              title: 'Basic usage (Web component)',
              tabs: [
                {
                  code: './examples/basic-usage-web-component.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Centered loading indicator with text in a section layout for content loading states.',
            codeblock: {
              title: 'Loading state in section',
              tabs: [
                {
                  code: './examples/loading-state-in-section.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Compact inline loading indicator for form submissions and quick actions.',
            codeblock: {
              title: 'Inline loading with text',
              tabs: [
                {
                  code: './examples/inline-loading-with-text.html',
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

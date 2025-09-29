import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Link';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/link.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Link',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'LinkEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'LinkSlots',
    },
  ],
  defaultExample: {
    image: 'link-default.png',
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
              'Links automatically inherit the tone from their surrounding text context.',
            codeblock: {
              title: 'Basic Links in Text',
              tabs: [
                {
                  code: './examples/basic-links-in-text.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates links within subdued text, showing how links can be used in less prominent text contexts for additional guidance or support.',
            codeblock: {
              title: 'Links in Subdued Text',
              tabs: [
                {
                  code: './examples/links-in-subdued-text.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates how links can be used in critical or urgent text contexts, drawing attention to important actions that require immediate user intervention.',
            codeblock: {
              title: 'Critical Context Links',
              tabs: [
                {
                  code: './examples/critical-context-links.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows how links automatically adapt their tone to the surrounding text context, maintaining visual consistency while providing navigation.',
            codeblock: {
              title: 'Links with Auto Tone',
              tabs: [
                {
                  code: './examples/links-with-auto-tone.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how links can be integrated within banner components to highlight important information and provide direct action paths.',
            codeblock: {
              title: 'Links in Banner',
              tabs: [
                {
                  code: './examples/links-in-banner.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates using links within a box container to provide contextual navigation and additional information in a visually contained area.',
            codeblock: {
              title: 'Links in Box Container',
              tabs: [
                {
                  code: './examples/links-in-box-container.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows how links can be used within warning banners to provide immediate actions related to critical notifications.',
            codeblock: {
              title: 'Links in Banner Context',
              tabs: [
                {
                  code: './examples/links-in-banner-context.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how to create links that trigger file downloads, useful for exporting data or providing downloadable resources.',
            codeblock: {
              title: 'Download Links',
              tabs: [
                {
                  code: './examples/download-links.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates linking to external resources with different targets, showing how to open links in new tabs and provide navigation to external documentation.',
            codeblock: {
              title: 'External Links',
              tabs: [
                {
                  code: './examples/external-links.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows how to use the `lang` attribute to specify the language of a link, supporting internationalization and proper screen reader pronunciation.',
            codeblock: {
              title: 'Links with Language Attribute',
              tabs: [
                {
                  code: './examples/links-with-language-attribute.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how links can have different visual tones, including default, neutral, and critical, allowing for varied contextual styling.',
            codeblock: {
              title: 'Links with Different Tones',
              tabs: [
                {
                  code: './examples/links-with-different-tones.html',
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

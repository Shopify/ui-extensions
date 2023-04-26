import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Disclosure',
  description:
    'Disclosure is an optionally controlled component used to put long sections of information under content blocks that users can expand or collapse by pressing an activator. The activator can be specified as children using an action component (`Button`, `Link` or `Pressable`) or `Checkbox` component. The content blocks can be specified as children inside a structure component (`View`, `InlineLayout`, `BlockStack`, `Grid`, etc.).\n\nThe library takes care of applying the WAI-ARIA Accordion pattern automatically for the activator and the toggled content.',
  thumbnail: 'Disclosure-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'DisclosureProps',
      description: '',
      type: 'DisclosureProps',
    },
  ],
  category: 'Components',
  subCategory: 'Interactive',
  defaultExample: {
    image: 'disclosure-default.png',
    codeblock: {
      title: 'Basic Disclosure',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/Disclosure/examples/basic-disclosure.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-disclosure.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Use the Disclosure component to simplify the user experience and reveal interfaces only when the customer requests it. It also demonstrates how a combination of inline and block layout components can improve the readability of information. By employing these strategies, users can easily scan and comprehend the content, making for a better user experience overall.',
        image: 'disclosure-and-alignment.gif',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: '../../../docs/reference/examples/ui-components/disclosure-and-alignment.example.tsx',
              language: 'typescript',
            },
            {
              title: 'JS',
              code: '../../../docs/reference/examples/ui-components/disclosure-and-alignment.example.ts',
              language: 'javascript',
            },
          ],
          title:
            'Strategies for simplifying layout and aligning content using Disclosure and Inline/Block Layout components.',
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Disclosures should be initiated by the buyer.\n\n- Use disclosures to hide content until they are relevant to the buyer.\n\n- Avoid hiding critical information that buyers need to complete their checkout.\n\n- Keep content inside disclosures concise.\n\n- Avoid nesting of disclosures.\n\n- Keep the activator and the content it toggles in close proximity to each other.',
    },
  ],
  related: [],
};

export default data;

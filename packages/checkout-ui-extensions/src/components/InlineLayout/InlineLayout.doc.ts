import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'InlineLayout',
  description:
    'InlineLayout is used to lay out content over multiple columns.\n\nBy default, all columns are of equal size and fill the available inline space. Content does not wrap on new rows when not enough columns have been explicitly set, instead they are added as new column and fill the remaining inline space.',
  thumbnail: 'inlinelayout-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'InlineLayoutProps',
      description: '',
      type: 'InlineLayoutProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'inlinelayout-default.png',
    codeblock: {
      title: 'Basic InlineLayout',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/InlineLayout/examples/basic-inlinelayout.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-inlinelayout.example.ts',
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
      anchorLink: 'accessibility-roles',
      title: 'Accessibility roles',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"main"</code> | Used to indicate the primary content. |\n| <code>"header"</code> | Used to indicate the component is a header. |\n| <code>"footer"</code> | Used to display information such as copyright information, navigation links, and privacy statements. |\n| <code>"section"</code> | Used to indicate a generic section. |\n| <code>"complementary"</code> | Used to designate a supporting section that relates to the main content. |\n| <code>"navigation"</code> | Used to identify major groups of links used for navigating. |\n| <code>"orderedList"</code> | Used to identify a list of ordered items. |\n| <code>"listItem"</code> | Used to identify an item inside a list of items. |\n| <code>"unorderedList"</code> | Used to identify a list of unordered items. |\n| <code>"separator"</code> | Used to indicates the component acts as a divider that separates and distinguishes sections of content. |\n| <code>"status"</code> | Used to define a live region containing advisory information for the user that is not important enough to be an alert. |\n| <code>"alert"</code> | Used for important, and usually time-sensitive, information. |',
    },
  ],
  related: [],
};

export default data;

import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Sheet',
  description:
    'Sheet is designed to be used on top of other elements in a user interface and is typically bound to the bottom of a page. Sheet can contain and display various types of content such as forms, or informational messages.\n\nThe library automatically applies the [WAI-ARIA Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) to both the activator and the sheet content.',
  requires:
    'configuration of the [Customer Privacy](/docs/api/checkout-ui-extensions/unstable/configuration#collect-buyer-consent) capability to be rendered.',
  thumbnail: 'sheet-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'SheetProps',
      description: '',
      type: 'SheetProps',
    },
  ],
  category: 'Components',
  subCategory: 'Overlays',
  defaultExample: {
    image: 'sheet-default.png',
    codeblock: {
      title: 'Basic Sheet',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Sheet/examples/basic-sheet.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-sheet.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Ensure that the padding provides enough empty space around the content and between UI elements. Sufficient padding helps with readability and visual hierarchy.\n\n- Aim for an optimal line length to ensure readability of the text. Generally a line length of around 50-75 characters is considered ideal.',
      sectionSubContent: [
        {
          title: 'Content',
          sectionContent:
            '- Ensure that the sheet is used for clear and specific purposes. Be concise with a title and a description.\n\n- Provide clear hierarchy and do not clutter the sheet.\n\n- Provide clear visual cues to indicate relevant actions. ',
        },
        {
          title: 'Sheets in Checkout',
          sectionContent:
            '- It is important that the sheet component does not obstruct main content. For example, the Checkout Pay Now button must be visible, even when the sheet is in place.\n\n- For Checkout, Sheet placement is restricted to the bottom of the form and should not block the Checkout process.',
        },
      ],
    },
  ],
  examples: {
    description: '',
    examples: [getExample('ui-components/sheet-consent', ['jsx', 'js'])],
  },
  related: [],
};

export default data;

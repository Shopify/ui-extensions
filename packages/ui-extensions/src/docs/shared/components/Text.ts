import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'The `s-text` component is used for inline text styling, similar to HTML `span` elements, not for paragraph-level content. Use it to apply different visual tones and text styles to specific words or phrases within a `s-paragraph`, such as a `strong` type or `critical` tone.',
  category: 'Polaris web components',
  subCategory: 'Titles and text',
  related: [
    {
      name: 'Heading',
      url: 'heading',
      type: 'Component',
    },
    {
      name: 'Paragraph',
      url: 'paragraph',
      type: 'Component',
    },
  ],
};

export default data;

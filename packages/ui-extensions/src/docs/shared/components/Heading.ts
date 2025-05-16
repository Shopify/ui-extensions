import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    'The `s-heading` component renders hierarchical titles similar to HTML’s `h1-h6` elements. Heading levels are automatically determined by parent `s-section` nesting depth starting from `h2`. Always prefer using the `heading` property on `s-section` and `s-banner` components before constructing custom layout with `s-heading`.',
  category: 'Polaris web components',
  subCategory: 'Titles and text',
  related: [
    {
      name: 'Text',
      url: 'text',
      type: 'Component',
    },
    {
      name: 'Paragraph',
      url: 'paragraph',
      type: 'Component',
    },
    {
      name: 'Section',
      url: 'section',
      type: 'Component',
    },
  ],
};

export default data;

import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Paragraph',
  description:
    'Use `s-paragraph` to display a block of text similar to the `<p>` tag in HTML.',
  category: 'Polaris web components',
  subCategory: 'Titles and text',
  related: [
    {
      name: 'Heading',
      url: 'heading',
      type: 'Component',
    },
    {
      name: 'Text',
      url: 'text',
      type: 'Component',
    },
  ],
};

export default data;

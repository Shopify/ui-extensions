import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Abbreviation',
  description: 'A text that represents an abbreviation or acronym.',
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
      name: 'Time',
      url: 'time',
      type: 'Component',
    },
  ],
};

export default data;

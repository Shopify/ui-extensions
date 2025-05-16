import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Abbreviation',
  description:
    'Displays abbreviated text or acronyms, revealing their full meaning or additional context through a tooltip on hover or focus. Use to clarify shortened terms, initialisms, or technical language without interrupting the reading flow.',
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

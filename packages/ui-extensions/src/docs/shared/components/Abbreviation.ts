import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Abbreviation',
  description:
    'Displays abbreviated text or acronyms, revealing their full meaning or additional context through a tooltip on hover or focus. Use to clarify shortened terms, initialisms, or technical language without interrupting the reading flow.',
  category: 'Polaris web components',
  subCategory: 'Titles and text',
};

export default data;

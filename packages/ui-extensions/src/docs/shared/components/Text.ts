import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Text',
  description:
    'Displays inline text with specific visual styles or tones. Use to emphasize or differentiate words or phrases within a Paragraph or other block-level components.',
  category: 'Polaris web components',
  subCategory: 'Titles and text',
};

export default data;

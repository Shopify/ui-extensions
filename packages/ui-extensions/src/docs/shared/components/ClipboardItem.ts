import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'ClipboardItem',
  description:
    'Enables copying text to the user’s clipboard. Use alongside Button or Link components to let users easily copy content. `<s-clipboard-item>` doesn’t render visually.',
  category: 'Polaris web components',
  subCategory: 'utilities',
};

export default data;

import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'ClipboardItem',
  description:
    'Enables copying text to the user’s clipboard. Use alongside Button or Link components to let users easily copy content. `<s-clipboard-item>` doesn’t render visually.',
  category: 'Polaris web components',
  subCategory: 'utilities',
  related: [
    {
      name: 'Button',
      url: 'button',
      type: 'Component',
    },
    {
      name: 'Link',
      url: 'link',
      type: 'Component',
    },
  ],
};

export default data;

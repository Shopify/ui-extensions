import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Clickable',
  description:
    'The `s-clickable` component is an escape hatch for when `s-button` and `s-link` are not sufficient to create an interactive element.',
  category: 'Polaris web components',
  subCategory: 'Actions',
  related: [
    {
      type: 'component',
      name: 'Button',
      url: 'button',
    },
    {
      type: 'component',
      name: 'Link',
      url: 'link',
    },
  ],
};

export default data;

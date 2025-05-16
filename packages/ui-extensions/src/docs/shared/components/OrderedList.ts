import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'OrderedList',
  description:
    '`s-ordered-list` displays a set of related text-only content beginning with a number.',
  category: 'Polaris web components',
  subCategory: 'Structure',
  related: [
    {
      name: 'UnorderedList',
      url: 'unorderedlist',
      type: 'component',
    },
  ],
};

export default data;

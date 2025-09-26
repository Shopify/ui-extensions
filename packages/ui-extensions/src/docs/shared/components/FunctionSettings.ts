import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'FunctionSettings',
  description:
    'FunctionSettings should be used when configuring the metafield configuration of a Shopify Function. It provides a structure for various input fields and controls, such as text fields, checkboxes, and selections. It also integrates with the native Contextual Save Bar to handle form submission and reset actions.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
    {
      type: 'component',
      name: 'NumberField',
      url: '/docs/api/admin-extensions/components/forms/numberfield',
    },
    {
      type: 'component',
      name: 'ChoiceList',
      url: '/docs/api/admin-extensions/components/forms/choicelist',
    },
  ],
};

export default data;

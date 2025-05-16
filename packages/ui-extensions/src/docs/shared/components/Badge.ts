import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    "Use `s-badge` to inform merchants of the status of an object or of an action that's been taken.",
  category: 'Polaris web components',
  subCategory: 'Titles and text',
  related: [
    {
      type: 'component',
      name: 'Banner',
      url: 'banner',
    },
    {
      type: 'component',
      name: 'Text',
      url: 'text',
    },
  ],
};

export default data;

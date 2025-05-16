import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Section',
  description:
    'Use `s-section` to organize your page content. Sections have defined styling, and will display differently depending on how deeply they are nested in the page.',
  category: 'Polaris web components',
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Box',
      url: 'box',
    },
    {
      type: 'component',
      name: 'Stack',
      url: 'stack',
    },
    {
      type: 'component',
      name: 'Heading',
      url: 'heading',
    },
  ],
};

export default data;

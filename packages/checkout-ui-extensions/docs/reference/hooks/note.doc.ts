import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useNote',
  description: '',
  descriptionType: 'UseNoteGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Notes',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseNoteGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;

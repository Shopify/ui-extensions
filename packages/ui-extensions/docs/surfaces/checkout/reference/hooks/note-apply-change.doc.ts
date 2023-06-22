import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApplyNoteChange',
  description: '',
  descriptionType: 'UseApplyNoteChangeGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Notes',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseApplyNoteChangeGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;

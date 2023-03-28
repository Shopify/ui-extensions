import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApplyNoteChange',
  description:
    'Returns a function to mutate the `note` property of the checkout.',
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

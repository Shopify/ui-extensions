import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtensionEditor',
  description:
    'Returns information about the editor where the extension is being rendered.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metadata',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseExtensionEditorGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;

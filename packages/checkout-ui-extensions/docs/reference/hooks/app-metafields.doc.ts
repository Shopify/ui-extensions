import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useAppMetafields',
  description: `
Returns the metafields configured with \`shopify.ui.extension.toml\`.
`,
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metafields',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseAppMetafieldsGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;

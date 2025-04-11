import {AdminReferenceEntityTemplateSchema} from '../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Web components 101',
  description: 'Yo',
  category: 'Polaris web components',
  isVisualComponent: false,
  related: [],
  examples: {
    description: '',
    examples: [
      {
        description: 'Yo',
        codeblock: {
          title: 'Yo',
          tabs: [
            {
              code: 'console.log("yo")',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;

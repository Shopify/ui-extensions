import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/URLField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/urlfield.png',
  definitions: [
    {
      title: 'URLField',
      description: '',
      type: 'URLField',
    },
  ],
  defaultExample: {
    image: 'urlfield-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          title: 'HTML',
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
};

export default data;

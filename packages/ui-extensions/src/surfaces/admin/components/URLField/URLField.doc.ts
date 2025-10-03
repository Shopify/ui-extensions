import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/URLField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/urlfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'URLField',
      description: '',
      type: 'URLField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'URLFieldEvents',
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
          language: 'html',
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
};

export default data;

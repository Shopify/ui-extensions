import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Badge';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/badge.png',
  isVisualComponent: true,
  isOneColumnLayout: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Badge',
    },
  ],
  defaultExample: {
    image: 'badge-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'inline',
        },
      ],
    },
  },
};

export default data;

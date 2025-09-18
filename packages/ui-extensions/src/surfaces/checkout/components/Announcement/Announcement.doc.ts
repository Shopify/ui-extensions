import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Announcement';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Events',
      description: '',
      type: 'AnnouncementElementEvents',
    },
    {
      title: 'Methods',
      description: '',
      type: 'AnnouncementElementMethods',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-announcement.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;

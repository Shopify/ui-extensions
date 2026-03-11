import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Announcement API',
  description: 'The API for interacting with the announcement bar.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'AnnouncementApi',
      description:
        'The API object provided to the `purchase.thank-you.announcement.render` extension target.',
      type: 'AnnouncementApi',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;

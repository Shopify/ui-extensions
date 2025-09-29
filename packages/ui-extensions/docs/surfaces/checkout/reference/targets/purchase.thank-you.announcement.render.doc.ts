import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, THANK_YOU_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.announcement.render',
  description:
    'A static extension target that is rendered on top of the **Thank you page** as a dismissable announcement.',
  defaultExample: getExample('purchase.thank-you.announcement.render/default', [
    'jsx',
  ]),
  subCategory: 'Announcement',
  related: getLinksByTag('targets'),
  ...THANK_YOU_API,
};

export default data;

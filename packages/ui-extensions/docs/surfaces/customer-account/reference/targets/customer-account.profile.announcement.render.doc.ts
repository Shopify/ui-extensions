import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {PROFILE_ANNOUNCEMENT_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.profile.announcement.render',
  description: `A static extension target that is rendered on top of the **Profile page** as a dismissable announcement.`,
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account profile announcement extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.profile.announcement.render/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.profile.announcement.render/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  subCategory: 'Profile (Default)',
  related: [
    {
      name: 'Placement references',
      subtitle: 'Navigate to',
      url: '/docs/apps/customer-accounts/best-practices/testing-ui-extensions#profile',
    },
  ],
  ...PROFILE_ANNOUNCEMENT_API,
  category: 'Targets',
  isVisualComponent: false,
};

export default data;

import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Details';
import summarySharedContent from '../../../../docs/shared/components/Summary';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'details-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'DetailsElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'DetailsElementEvents',
    },
    {
      title: summarySharedContent.name,
      description: summarySharedContent.description,
      type: 'SummaryProps',
    },
  ],
  defaultExample: {
    image: 'details-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-details.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [],
};

export default data;

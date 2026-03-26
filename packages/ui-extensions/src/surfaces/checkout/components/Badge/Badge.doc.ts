import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Badge';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'badge-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'BadgeProps',
    },
  ],
  defaultExample: {
    image: 'badge-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-badge.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Add an icon alongside a badge label to reinforce status meaning. This example uses the `icon` and `iconPosition` properties with a `neutral` tone and `small` size to display a compact delivery estimate.',
        codeblock: {
          title: 'Add an icon to a delivery status badge',
          tabs: [
            {
              code: './examples/badge-icon.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [],
};

export default data;

import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Tooltip';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/tooltip.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Slots',
      description: '',
      type: 'TooltipSlots',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TooltipSlots',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
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

import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Button';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/button.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Button',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ButtonEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ButtonSlots',
    },
  ],
  defaultExample: {
    image: 'button-default.png',
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
          layout: 'inline',
        },
      ],
    },
  },
};

export default data;

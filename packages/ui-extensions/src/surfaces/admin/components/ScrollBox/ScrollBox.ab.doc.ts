import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ScrollBox';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  category: 'Polaris web components',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/scroll-box.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ScrollBox',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ScrollBoxEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ScrollBoxSlots',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'alignStart',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [],
  },
};

export default data;

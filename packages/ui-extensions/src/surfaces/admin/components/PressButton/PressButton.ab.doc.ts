import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/PressButton';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  category: 'Polaris web components',
  // TODO: Add thumbnail at /packages/ui-extensions/docs/surfaces/admin/screenshots/components/press-button.png
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/press-button.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PressButton',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'PressButtonEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'PressButtonSlots',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'alignStart',
        },
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'alignStart',
        },
      ],
    },
  },
  // TODO: Add more examples
  examples: {
    description: 'Component examples',
    exampleGroups: [],
  },
};

export default data;

import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import shared from '../../../../docs/shared/components/Menu';

const data: AdminReferenceEntityTemplateSchema = {
  ...shared,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/menu.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Menu',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'MenuEvents',
    },
  ],
  defaultExample: {
    image: 'menu-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
};

export default data;

import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Table';

import tableBodySharedContent from '../../../../docs/shared/components/TableBody';
import tableCellSharedContent from '../../../../docs/shared/components/TableCell';
import tableHeaderSharedContent from '../../../../docs/shared/components/TableHeader';
import tableHeaderRowSharedContent from '../../../../docs/shared/components/TableHeaderRow';
import tableRowSharedContent from '../../../../docs/shared/components/TableRow';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/table.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Table',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TableSlots',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'TableEvents',
    },
    {
      title: tableBodySharedContent.name,
      description: tableBodySharedContent.description,
      type: 'TableBody',
    },
    {
      title: tableCellSharedContent.name,
      description: tableCellSharedContent.description,
      type: 'TableCell',
    },
    {
      title: tableHeaderSharedContent.name,
      description: tableHeaderSharedContent.description,
      type: 'TableHeader',
    },
    {
      title: tableHeaderRowSharedContent.name,
      description: tableHeaderRowSharedContent.description,
      type: 'TableHeaderRow',
    },
    {
      title: tableRowSharedContent.name,
      description: tableRowSharedContent.description,
      type: 'TableRow',
    },
  ],
  defaultExample: {
    image: 'table-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'section',
        },
      ],
    },
  },
  related: [
    {
      name: 'Index table',
      subtitle: 'Composition',
      url: 'docs/api/app-home/patterns/compositions/index-table',
      type: 'component',
    },
  ],
};

export default data;

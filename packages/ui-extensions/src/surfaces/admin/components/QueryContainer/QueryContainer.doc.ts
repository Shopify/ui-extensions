import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/QueryContainer';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/page.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description:
        'Use to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.',
      type: 'QueryContainer',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
    codeblock: {
      title: '',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'none',
        },
      ],
    },
  },
  related: [],
};

export default data;

import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Select';
import optionSharedContent from '../../../../docs/shared/components/Option';
import optionGroupSharedContent from '../../../../docs/shared/components/OptionGroup';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/select.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Select',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'SelectEvents',
    },
    {
      title: optionSharedContent.name,
      description: optionSharedContent.description,
      type: 'Option',
    },
    {
      title: optionGroupSharedContent.name,
      description: optionGroupSharedContent.description,
      type: 'OptionGroup',
    },
  ],
  defaultExample: {
    image: 'select-default.png',
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

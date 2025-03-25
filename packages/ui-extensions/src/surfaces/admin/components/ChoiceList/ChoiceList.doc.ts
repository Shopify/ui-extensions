import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'Use choice lists to present multiple options to merchants. Choice lists can present options with either radio buttons for single selection or checkboxes for multiple selection.',
  requires: '',
  thumbnail: 'choicelist-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'ChoiceList',
      description: 'A component for presenting a list of selectable options.',
      type: 'ChoiceList',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choicelist-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.html',
          language: 'jsx',
        },
        {
          title: 'HTML',
          code: './examples/default.html', // This gets updated in build-ab-docs.sh
          language: 'preview', // Do not edit. This is required for Live Previews
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'Select',
      url: '/docs/api/admin-extensions/components/forms/select',
    },
    {
      type: 'component',
      name: 'Checkbox',
      url: '/docs/api/admin-extensions/components/forms/checkbox',
    },
  ],
};

export default data;

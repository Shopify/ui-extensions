import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkbox',
  description:
    'Use this component when you want to provide users with a clear selection option, such as for agreeing to terms and conditions or selecting multiple options from a list.',
  requires: '',
  thumbnail: 'checkbox-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Checkbox',
      description: '',
      type: 'Checkbox',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'checkbox-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          title: 'HTML',
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
      name: 'ChoiceList',
      url: '/docs/api/admin-extensions/components/forms/choice-list',
    },
  ],
};

export default data;

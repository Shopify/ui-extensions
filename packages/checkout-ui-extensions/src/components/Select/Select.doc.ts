import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Select',
  description:
    'Selects let buyers choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.',
  requires: '',
  thumbnail: 'select-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'SelectProps',
      description: '',
      type: 'SelectProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'select-default.png',
    codeblock: {
      title: 'Basic Select',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/Select/examples/basic-select.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-select.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Use this component when customers need to choose between four or more predefined options.\n\n- Have a default option selected whenever possible. Use Select as placeholder text if there’s no logical default option.',
    },
  ],
  related: [],
};

export default data;

import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Spinner',
  description:
    'Spinner is used to notify buyers that their action is being processed. The Spinner is usually used when sending or receiving data from a server.',
  requires: '',
  thumbnail: 'spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'SpinnerProps',
      description: '',
      type: 'SpinnerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'spinner-default.png',
    codeblock: {
      title: 'Basic Spinner',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/Spinner/examples/basic-spinner.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-spinner.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'appearance',
      title: 'Appearance',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"accent"</code> | Conveys emphasis and draws attention to the element. |\n| <code>"monochrome"</code> | Takes the color of its parent.|',
    },
  ],
  related: [],
};

export default data;

import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Spinner',
  description:
    'Use `s-spinner` to let users know that content is being loaded. For loading states on buttons, use the loading prop on the `Button` component instead.',
  requires: '',
  thumbnail: 'spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SpinnerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'spinner-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-spinner.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [],
  related: [
    {
      name: 'Progress',
      subtitle: 'Component',
      url: 'progress',
      type: 'Component',
    },
  ],
};

export default data;

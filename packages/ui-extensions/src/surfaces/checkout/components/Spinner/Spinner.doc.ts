import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Spinner';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'spinner-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SpinnerProps',
    },
  ],
  defaultExample: {
    image: 'spinner-default.gif',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-spinner.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [],
};

export default data;

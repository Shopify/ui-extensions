import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Spinner';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
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
  defaultExample: {
    image: 'spinner-default.mp4',
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

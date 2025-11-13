import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'Add visual content to the POS interface and customize the presentation of visuals.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Image',
      description: '',
      type: 'ImageProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'image-default.png',
    codeblock: generateCodeBlock('Example image', 'image', 'default-example'),
  },
  thumbnail: 'image-thumbnail.png',
};

export default data;

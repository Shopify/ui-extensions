import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForBanner = (title: string, fileName: string) =>
  generateCodeBlock(title, 'box', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'Display a generic container with consistent spacing and styling.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Box',
      description: '',
      type: 'BoxProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'box-thumbnail.png',
  defaultExample: {
    image: 'box-default.png',
    codeblock: generateCodeBlockForBanner('Box', 'default.example'),
  },
};

export default data;

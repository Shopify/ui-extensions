import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'scroll-view', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'ScrollView',
  description:
    'Create a scrollable container for content that exceeds the available display area.',
  isVisualComponent: true,
  type: 'component',
  definitions: [],
  category: 'Components',
  related: [],
  thumbnail: 'scroll-view-thumbnail.png',
  defaultExample: {
    image: 'scroll-view-default.png',
    codeblock: generateCodeBlockForComponent('ScrollView', 'default.example'),
  },
};

export default data;

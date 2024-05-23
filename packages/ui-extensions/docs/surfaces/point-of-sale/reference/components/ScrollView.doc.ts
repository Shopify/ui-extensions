import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'scroll-view', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'ScrollView',
  description:
    'The ScrollView component allows content that doesn’t fully fit on screen to scroll. Typically, the ScrollView component serves as the root component of a Screen.',
  isVisualComponent: true,
  type: 'component',
  definitions: [],
  category: 'Components',
  related: [],
  defaultExample: {
    codeblock: generateCodeBlockForComponent('ScrollView', 'default.example'),
  },
};

export default data;

import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'section', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Section',
  description: `A component used to group other components together in a card-like UI. Usually, sections will be used inside a ScrollView.
  > Note:
  > Section no longer has a border as of POS 10.0.0.`,
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Section',
      description: '',
      type: 'SectionProps',
    },
    {
      title: 'SectionHeaderAction',
      description: '',
      type: 'SectionHeaderAction',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'section-header-thumbnail.png',
  defaultExample: {
    image: 'section-header-default.png',
    codeblock: generateCodeBlockForComponent('Section', 'default.example'),
  },
};

export default data;

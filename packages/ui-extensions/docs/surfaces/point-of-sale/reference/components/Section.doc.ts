import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'section', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Section',
  description: `Group related content into clearly-defined thematic areas.
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
  thumbnail: 'section-thumbnail.png',
  defaultExample: {
    image: 'section-default.png',
    codeblock: generateCodeBlockForComponent('Section', 'default.example'),
  },
};

export default data;

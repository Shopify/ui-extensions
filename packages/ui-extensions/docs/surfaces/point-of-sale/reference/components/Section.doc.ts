import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'section', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Section',
  description:
    'The `Section` component groups related content into clearly-defined thematic areas. Sections provide visual boundaries and optional actions to organize content within POS interfaces.\n\nUse sections to create structured layouts with clear titles and actionable elements that help users navigate and interact with grouped content.\n\nThe component supports customizable section dividers and spacing between sections, allowing you to create visual rhythm and hierarchy that guides merchants through complex forms and settings interfaces. Sections can be nested to create hierarchical content organization, with each level automatically adjusting its visual styling and semantic meaning to maintain clear structure and relationships throughout complex interfaces.\n\nThe `Section` component no longer has a border as of POS version 10.0.0.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Section` component.',
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

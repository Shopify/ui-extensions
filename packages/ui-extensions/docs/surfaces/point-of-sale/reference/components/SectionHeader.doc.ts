import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SectionHeader',
  description:
    'A heading style text component with an optional divider line to structure content.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'SectionHeader',
      description: '',
      type: 'SectionHeaderProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'section-header-thumbnail.png',
  defaultExample: {
    image: 'section-header-default.png',
    codeblock: generateCodeBlock(
      'SectionHeader',
      'section-header',
      'default.example',
    ),
  },
};

export default data;

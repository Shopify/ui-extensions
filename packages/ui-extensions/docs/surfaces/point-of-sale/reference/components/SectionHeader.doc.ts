import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SectionHeader',
  description:
    'Display a title with an optional action button and divider line.',
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

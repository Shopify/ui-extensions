import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'The `Text` component displays text with specific visual styles and colors. Use it to present content with appropriate typography hierarchy and semantic coloring for different types of information.\n\nText provides a comprehensive typography system that ensures consistent styling and proper visual hierarchy across POS interfaces.\n\n`Text` components ensure proper text rendering across different device types and screen sizes while maintaining readability through appropriate line heights, letter spacing, and color contrast ratios. The component automatically adjusts line length for optimal readability based on container width, preventing overly long lines that reduce reading speed and comprehension in wider layouts.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Text` component.',
      type: 'TextProps',
    },
    {
      title: 'TextVariant',
      description: '',
      type: 'TextVariant',
    },
    {
      title: 'ColorType',
      description: '',
      type: 'ColorType',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'text-thumbnail.png',
  defaultExample: {
    image: 'text-default.png',
    codeblock: generateCodeBlock('Text', 'text', 'default.example'),
  },
};

export default data;

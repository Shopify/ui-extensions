import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Spacing',
  description:
    "The `Spacing` component provides a set of spacing constants to be used in the POS UI extensions components library. Use these predefined values to maintain consistent spacing and layout patterns across POS interfaces.\n\nThe component provides access to design system spacing tokens through a set of predefined constants, ensuring consistent spacing throughout extensions. It eliminates the need for hardcoded pixel values by offering semantic spacing values that automatically adapt to design system changes, maintaining visual consistency across different screen sizes and orientations.\n\n`Spacing` components provide semantic spacing names like 'tight', 'loose', and 'extraLoose' that map to specific design system values, making spacing choices more intuitive and maintainable.",
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'VerticalSpacing',
      description: '',
      type: 'VerticalSpacing',
    },
    {
      title: 'HorizontalSpacing',
      description: '',
      type: 'HorizontalSpacing',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'spacing-thumbnail.png',
  defaultExample: {
    image: 'spacing-default.png',
    codeblock: generateCodeBlock('Spacing', 'spacing', 'default.example'),
  },
};

export default data;

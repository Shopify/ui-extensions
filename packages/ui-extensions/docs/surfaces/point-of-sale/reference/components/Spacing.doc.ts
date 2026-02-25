import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Spacing',
  description:
    "The Spacing component provides a set of spacing constants to be used in the POS UI extensions components library. Use these predefined values to maintain consistent spacing and layout patterns across POS interfaces.\n\nThe component provides access to design system spacing tokens through a set of predefined constants, ensuring consistent spacing throughout extensions. It eliminates the need for hardcoded pixel values by offering semantic spacing values that automatically adapt to design system changes, maintaining visual consistency across different screen sizes and orientations.\n\nSpacing components provide semantic spacing names like 'tight', 'loose', and 'extraLoose' that map to specific design system values, making spacing choices more intuitive and maintainable.",
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'VerticalSpacing',
      description:
        'The spacing values for controlling vertical space between elements.',
      type: 'VerticalSpacing',
    },
    {
      title: 'HorizontalSpacing',
      description:
        'The spacing values for controlling horizontal space between elements.',
      type: 'HorizontalSpacing',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  thumbnail: 'spacing-thumbnail.png',
  defaultExample: {
    image: 'spacing-default.png',
    codeblock: generateCodeBlock(
      'Use consistent spacing values',
      'spacing',
      'default.example',
    ),
    description:
      'Apply consistent spacing patterns using design system tokens. This example demonstrates using predefined spacing constants instead of hardcoded pixel values, ensuring visual consistency that automatically adapts to design system changes across different screen sizes.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Apply numeric spacing for precise control:** Use the numeric spacing values when you need precise control over spacing amounts, particularly in Stack components where exact spacing relationships are important for visual hierarchy.\n- **Maintain consistent spacing patterns:** Establish consistent patterns for how you use spacing values across your extension. Similar types of content should use similar spacing values, helping users develop familiarity with your interface organization.\n- **Consider touch interface requirements:** Ensure adequate spacing for touch-based interactions by using appropriate spacing values that provide comfortable touch targets. POS interfaces require generous spacing for reliable touch interaction.\n- **Balance spacing with content density:** Choose spacing values that balance content density with readability. Use smaller spacing values for information-dense interfaces and larger values when content needs breathing room.\n- **Align spacing with visual hierarchy:** Use larger spacing values to separate major content areas and smaller values for related elements. This creates clear visual hierarchy that helps users understand content relationships.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Spacing values are predefined constants—custom spacing values outside the provided scales aren't supported to maintain design system consistency.\n- The Spacing component is primarily designed for layout components like Stack—not all components support all spacing types.\n- Spacing behavior may vary between different POS device screen sizes and resolutions, though the relative relationships between spacing values remain consistent.\n`,
    },
  ],
};

export default data;

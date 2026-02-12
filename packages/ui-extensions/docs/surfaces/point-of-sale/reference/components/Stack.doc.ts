import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const generateCodeBlockForStack = (title: string, fileName: string) => {
  return {
    title,
    tabs: [
      {
        title: 'React',
        code: `../examples/stack/${fileName}.tsx`,
        language: 'tsx',
      },
      {
        title: 'TS',
        code: `../examples/stack/${fileName}.ts`,
        language: 'ts',
      },
    ],
  };
};

const data: ReferenceEntityTemplateSchema = {
  name: 'Stack',
  description:
    'The Stack component organizes elements horizontally or vertically along the block or inline axis. Use it to structure layouts, group related components, or control spacing between elements with flexible alignment options.\n\nThe component simplifies layout creation by automatically managing spacing between child elements through gap properties, eliminating the need for manual margin management. It supports both horizontal and vertical arrangements, flexible alignment options, and wrapping behavior, making it the foundation for building consistent, responsive layouts throughout POS extensions.\n\nStack components support responsive gap values that automatically adjust spacing based on screen size, ensuring layouts remain visually balanced and maintain proper element separation across different devices.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Stack component.',
      type: 'StackProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  thumbnail: 'stack-thumbnail.png',
  defaultExample: {
    image: 'stack-default.png',
    codeblock: generateCodeBlockForStack(
      'Layout elements horizontally or vertically',
      'inline-default',
    ),
    description:
      'Organize UI elements horizontally or vertically with automatic spacing management. This example shows a Stack with default values, demonstrating how to structure layouts and control element spacing through gap properties without manual margin management.',
  },
  examples: {
    description:
      'Learn how to create flexible layouts with inline and block stacks, control alignment, and nest stacks for complex UIs.',
    examples: [
      {
        codeblock: generateCodeBlockForStack(
          'Arrange elements vertically',
          'block',
        ),
        description:
          'Stack elements vertically by setting `direction="block"`. This creates a vertical layout with automatic gap spacing between elements, ideal for forms, lists, or any vertically-stacked content.',
        image: 'extension-stack-block.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Center content on both axes',
          'block-center-all',
        ),
        description:
          'Center elements both horizontally and vertically using `justifyContent="center"`, `alignContent="center"`, and `alignItems="center"` with custom `blockSize="50%"` and `inlineSize="100%"`. All three alignment properties work together to create perfectly centered content on both axes.',
        image: 'extension-stack-block-center-all.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Center elements horizontally',
          'inline-center-children',
        ),
        description:
          'Center elements horizontally using `justifyContent="center"` with `flexChildren={false}` (default). This positions children in the center while keeping them at their minimum required size, ideal for centered button groups without stretching.',
        image: 'extension-stack-inline-centered.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Center elements vertically',
          'inline-align-items-center',
        ),
        description:
          'Center children along the vertical axis using `alignItems="center"`. This example shows an inline stack with two children of different heights (a nested block stack and a button)—since the block stack has greater intrinsic height, `alignItems="center"` centers both children along the cross-axis.',
        image: 'extension-stack-inline-align-items-center.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Create complex layouts with nested stacks',
          'nested',
        ),
        description:
          'Nest multiple stacks to build sophisticated layouts. This example creates a tappable row using an inline parent stack with `justifyContent="space-between"` and `inlineSize="100%"` containing two child stacks: a block stack (left) with gap 100 for labels, and an inline stack (right) with gap 600 for text and icon. The entire structure is wrapped in a Selectable component for tap interaction with visual highlight.',
        image: 'extension-stack-nested.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Expand children to fill available space',
          'inline-flex-children',
        ),
        description:
          'Make child components expand to fill available space in an inline stack using `flexChildren={true}`. This stretches the two buttons to occupy maximum space within the inline container, distributing space evenly across children for full-width layouts.',
        image: 'extension-stack-inline-flexChildren.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Space elements apart vertically',
          'block-space-between',
        ),
        description:
          'Distribute children vertically using `justifyContent="space-between"` with `blockSize="50%"` for custom height. This example removes the ScrollView wrapper and adds `inlinePadding="450"` to mimic screen header padding, spreading children across the available height with maximum spacing.',
        image: 'extension-stack-block-space-between.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Stretch elements to fill width',
          'block-align-content-stretch',
        ),
        description:
          'Stretch child elements to fill container width using `alignContent="stretch"`. This makes all children expand horizontally to fill available space regardless of content, ensuring consistent full-width elements in vertical layouts.',
        image: 'extension-stack-block-align-content-stretch.png',
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Apply consistent spacing using the numeric scale:** Use the predefined numeric spacing values (for example, \`'100'\`, \`'300'\`, \`'500'\`) to maintain consistency across your interface. Start with \`'300'\` for standard spacing and adjust up or down based on your content hierarchy needs.\n- **Use alignment properties for professional layouts:** Use the\`justifyContent\` property to control main axis distribution. Use \`alignItems\` for cross axis positioning of individual items, and \`alignContent\` for cross axis distribution when there's extra space.\n- **Use gap properties for precise spacing control:** Take advantage of the flexible gap system - use \`gap\` for uniform spacing, \`rowGap\` for block axis control, and \`columnGap\` for inline axis control.\n- **Combine with other layout components strategically:** Use the Stack component in combination with Box and Section components. Stack handles element arrangement and spacing, while other components provide additional layout capabilities.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\nWrapping behavior is determined by direction—inline stacks wrap content while block stacks don't, which may not suit all layout requirements.\n`,
    },
  ],
};

export default data;
